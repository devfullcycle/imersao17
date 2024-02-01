import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function searchProducts(
    router: AppRouterInstance,
    search: string | undefined | null,
    category_id: string | undefined | null
  ) {
    let path = `/products`;
  
    const urlSearchParams = new URLSearchParams();
  
    if (search) {
      urlSearchParams.append("search", search);
    }
  
    if (category_id && category_id !== "0") {
      urlSearchParams.append("category_id", category_id);
    }
  
    if (urlSearchParams.toString()) {
      path += `?${urlSearchParams.toString()}`;
    }
  
    router.push(path);
  }
  