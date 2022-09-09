import React from "react";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function StoreItems({ id, brand, price, image }) {
  return (
    <>
      <div>
        <Card
          sx={{
            width: 300,
            height: 450,
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 1,
            // p: 1,
          }}
        >
          <CardMedia
            component="img"
            src={image}
            sx={{ width: 300, height: 200 }}
          />
          <Box sx={{ display: "flex", p: 3 }}>
            <Typography variant="body1" sx={{ mr: 20 }}>
              {brand}
            </Typography>

            <Typography variant="body1">{price}</Typography>
          </Box>
          <Box className="addBtns" sx={{ display: "flex" }}>
            <Button size="small" variant="contained">
              -
            </Button>
            <Typography sx={{ m: 1 }}>0 In Cart</Typography>
            <Button size="small" variant="contained">
              +
            </Button>
          </Box>
          <Box className="remove">
            <Button size="small" variant="contained">
              remove
            </Button>
          </Box>

          <Container maxWidth="sm">
            <Button size="small" fullWidth variant="contained" sx={{ mt: 2 }}>
              Add To Cart
            </Button>
          </Container>
        </Card>
      </div>
    </>
  );
}

export default StoreItems;
