"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter, useSearchParams } from "next/navigation";
import { searchProducts } from "../../utils";
import { Category } from "../../models";

export function SelectCategory({ categories }: { categories: Category[] }) {
  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        // className="select-category"
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        onChange={(event) => {
          
        }}
      >
        <MenuItem value="0">Todas as categorias</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
