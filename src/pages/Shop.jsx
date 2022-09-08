import React from "react";
import Navbar from "../components/Navbar";
import storeItems from "../data/items.json";
import StoreItems from "../components/StoreItems";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Shop() {
  return (
    <>
      <Navbar />
      <div>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 3,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            color: "black",
            p: 0.5,
          }}
        >
          Shop
        </Typography>
      </div>
      <Box className="storeProducts ">
        {storeItems.map((item) => (
          <StoreItems
            key={item.id}
            price={item.price}
            name={item.name}
            image={item.imgUrl}
          />
        ))}
      </Box>
    </>
  );
}

export default Shop;
