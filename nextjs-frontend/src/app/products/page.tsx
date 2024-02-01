import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Image from "next/legacy/image";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models";

async function getProducts({
  search,
  category_id,
}: {
  search?: string;
  category_id?: string;
}): Promise<Product[]> {
  const urlSearchParams = new URLSearchParams();

  if (search) {
    urlSearchParams.append("search", search);
  }

  if (category_id) {
    urlSearchParams.append("category_id", category_id);
  }

  let url = `${process.env.NEXT_API_URL}/products`;

  if (urlSearchParams.toString()) {
    url += `?${urlSearchParams.toString()}`;
  }

  const response = await fetch(url, {
    next: {
      revalidate: 1,
    },
  });

  return response.json();
}

async function ListProductsPage({
  searchParams,
}: {
  searchParams: { search?: string; category_id?: string };
}) {
  const products = await getProducts({
    search: searchParams.search,
    category_id: searchParams.category_id,
  });

  return (
    <Grid2 container spacing={2}>
      {products.length === 0 && (
        <Grid2 xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5">Nenhum produto encontrado</Typography>
        </Grid2>
      )}
      {products.map((product, key) => (
        <Grid2 xs={12} sm={6} md={4} key={key}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
              }}
            >
              <Image
                src={product.image_url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography
                sx={{
                  color: "primary.main",
                }}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button size="small" startIcon={<ShoppingCartIcon />}>
                  Comprar
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ListProductsPage;
