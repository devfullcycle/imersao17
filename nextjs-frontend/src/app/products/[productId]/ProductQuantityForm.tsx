"use client";
import {
  Box,
  Button,
  Divider,
  Slider,
  Typography,
} from "@mui/material";
import { Product } from "../../../models";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Total } from "../../../components/Total";
import { addToCartAction } from "../../../server-actions/cart.action";

const schema = yup
  .object({
    product_id: yup.string().uuid().required(),
    quantity: yup.number().required().integer().min(1),
  })
  .required();

export function ProductQuantityForm(props: { product: Product }) {
  const { product } = props;

  const { control, register, getValues, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      product_id: product.id,
      quantity: 1,
    },
  });

  const [total, setTotal] = useState(
    product.price * getValues()["quantity"]
  );

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "quantity" || name?.includes("attributes")) {
        setTotal(product.price * getValues()["quantity"]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, product, getValues]);

  return (
    <Box
      component="form"
      sx={{ p: 1 }}
      action={addToCartAction}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <SettingsSuggestIcon />
          <Typography variant="h6">Configure sua compra</Typography>
        </Box>
        <Box display={{ xs: "none", md: "block" }}>
          <Total total={total} />
        </Box>
      </Box>
      <input
        type="hidden"
        value={props.product.id}
        {...register("product_id")}
      />
      <Controller
        name="quantity"
        control={control}
        defaultValue={1}
        render={({ field, fieldState }) => (
          <Box sx={{ mt: 1 }}>
            <Typography>Quantidade</Typography>
            <Slider
              sx={{ mt: 5 }}
              valueLabelDisplay="on"
              step={1}
              marks
              min={1}
              max={10}
              {...field}
            />
          </Box>
        )}
      />
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Button type="submit" sx={{ mt: 3 }} startIcon={<ShoppingCartIcon />}>
          Colocar no carrinho
        </Button>
      </Box>
    </Box>
  );
}
