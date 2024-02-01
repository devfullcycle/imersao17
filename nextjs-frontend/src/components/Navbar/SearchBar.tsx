"use client";

import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { useRouter, useSearchParams } from "next/navigation";
import { searchProducts } from "../../utils";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: grey[400],
  "&:hover": {
    backgroundColor: grey[500],
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: grey[900],
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: grey[900],
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const search = formData.get("search") as string;
          const category_id = searchParams.get("category_id");
          searchProducts(router, search, category_id);
        }}
      >
        <StyledInputBase
          name="search"
          type="search"
          placeholder="Pesquisar…"
          defaultValue={searchParams.get("search")}
        />
      </form>
    </Search>
  );
}
