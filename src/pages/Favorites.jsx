import React from "react";
import { useAppContext } from "../context";
// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
function Favorites() {
  const { favorites, removeFavorite } = useAppContext();
  console.log(favorites);
  const pointer = { cursor: "pointer" };
  return (
    <Container maxWidth="sm" sx={{ bgcolor: "#fff", height: "100vh", mt: 10 }}>
      <Typography
        variant="h3"
        color="text.primery"
        sx={{ textAlign: "center", borderBottom: 1.5 }}
      >
        Favourite
      </Typography>
      {favorites.length > 0 ? (
        favorites.map((prod) => (
          <div key={prod.id}>
            <Card
              sx={{
                width: 535,
                mb: 2,
                p: 1,
                display: "flex",
                justifyContent: "space-between",
                alineItems: "center",
                mt: 2,
              }}
            >
              <CardMedia
                component="img"
                image={prod.thumbnail}
                style={pointer}
                sx={{ width: "110px", height: "100px", objectFit: "contain" }}
                alt="Paella dish"
              />

              <Box
                sx={{
                  wordBreak: "break-word",
                }}
              >
                <Typography sx={{ mt: 3 }}>{prod.title}</Typography>
                <Typography>${prod.price}</Typography>
              </Box>
              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeFavorite(prod.id)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </div>
        ))
      ) : (
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          No Favorites Items
        </Typography>
      )}
    </Container>
  );
}

export default Favorites;
