import React from "react";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function StoreItems({ id, name, price, image }) {
  //   const {
  //     getItemQuantity,
  //     increaseCartQuantity,
  //     decreaseCartQuantity,
  //     removeFromCart,
  //   } = useShoppingCart();
  // const quantity = getItemQuantity(id);
  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          ml: "auto",
          mr: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mb: 3,
        }}
      >
        <CardMedia
          component="img"
          height="350"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          // alt="coverImage"
          sx={{ width: 200, height: 150, border: 1 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box variant="body1" sx={{ mr: 50 }}>
            {name}
          </Box>

          <Box variant="body1">{price}</Box>
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
          {/* <Box className="addToCart"> */}
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ mb: 2, mt: 2 }}
          >
            Add To Cart
          </Button>
          {/* </Box> */}
        </Container>
      </Card>
    </Container>
  );
}

export default StoreItems;
