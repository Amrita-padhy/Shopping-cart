import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import storeItems from "../data/items.json";
import StoreItems from "../components/StoreItems";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Shop() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [data, setData] = useState([]);
  console.log(data);

  const getAllProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();
      setData(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  // .then((res) => res.json())
  return (
    <>
      <Navbar />
      {/* <Box sx={{ width: "100%", mt: 1 }}> */}
      <Grid
        container
        gap={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data.map((item) => (
          <StoreItems
            id={item.id}
            brand={item.brand}
            image={item.thumbnail}
            price={item.price}
          />
        ))}
      </Grid>
      {/* </Box> */}

      {/* <Box display="grid" gridTemplateColumns="repeat(3, 3fr)" gap={2}>
        {data.map((item) => (
          <StoreItems
            id={item.id}
            brand={item.brand}
            image={item.thumbnail}
            price={item.price}
          />
        ))}
      </Box> */}
    </>
  );
}

export default Shop;
