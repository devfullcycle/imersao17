import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { UserMenu } from "./UserMenu";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { SelectCategory } from "./SelectCategory";
import Image from "next/legacy/image";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export async function Navbar() {

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "background.paper" }}> 
        <Image
          src="/logo.png"
          width={147.66}
          height={63.66}
          alt="logo"
          priority
        />
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", ml: 1 }}
        >
          <SearchBar />
        </Box>
        <IconButton LinkComponent={Link} size="large" href="/my-cart">
          <ShoppingCartIcon />
        </IconButton>
        <UserMenu user={{}} />
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          alignContent: "center",
          p: 1,
        }}
      >
        <SelectCategory categories={[]} />

        <Box
          component={Link}
          href={"/products"}
          sx={{ textDecoration: "none", display: "flex", ml: 3 }}
        >
          <HomeIcon sx={{ color: "text.primary" }} />
          <Typography
            color="text.primary"
            sx={{ fontWeight: 500, display: "flex" }}
          >
            Home
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
