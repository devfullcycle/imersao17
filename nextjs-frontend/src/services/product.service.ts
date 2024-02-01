import { Product } from "../models";

export class ProductService {
  async getProducts({
    search,
    category_id,
  }: {
    search: string | undefined;
    category_id: string | undefined;
  }): Promise<Product[]> {
    let url = `${process.env.CATALOG_API_URL}/product`;

    if (category_id) {
      url += `/category/${category_id}`;
    }

    const response = await fetch(url, {
      next: {
        revalidate: 1,
      },
    }); //revalidate on demand
    let data = await response.json();
    data = !data ? [] : data;
    if (search) {
      return data.filter((product: Product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    return data;
  }

  async getProductsByIds(productIds: string[]): Promise<Product[]> {
    const responses = await Promise.all(
      productIds.map((productId) =>
        fetch(`${process.env.CATALOG_API_URL}/product/${productId}`, {
          next: {
            revalidate: 1,
          },
        })
      )
    );

    return Promise.all(responses.map((response) => response.json()));
  }

  async getProduct(productId: string): Promise<Product> {
    const response = await fetch(
      `${process.env.CATALOG_API_URL}/product/${productId}`,
      {
        next: {
          revalidate: 1,
        },
      }
    ); //revalidate on demand
    return response.json();
  }
}
