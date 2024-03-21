import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image, { ImageType } from "./shared/Image";
import { Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useClamp from "@/hooks/useClamp"; // Import useClamp hook

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const clamp = useClamp(); // Apply useClamp hook

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); // Toggle favorite state
  };

  return (
    <Grid container item xs={12} sm={6} md={4} lg={3} alignItems="flex-end" >
      <div style={{ textAlign: "center", padding: "10px", marginTop: "40px", width: "100%" }}>
        <div style={{ position: "relative", width: "200px", height: "200px", margin: "auto" }}>
          <Image
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensure the entire image fits within the container
            }}
            type={ImageType.JPEG}
          />
        </div>
        <div style={{ textAlign: "left", padding: "10px 0px 0px 0px", marginTop: "10px", width: "100%" }}>
          <div style={{ position: "relative", width: "200px", height: "200px", margin: "auto" }}>
            <Typography style={{ flex: 1, fontSize: clamp("0.9rem", "1rem"), fontWeight: "bold", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</Typography>
            <Typography style={{ fontSize: clamp("0.7rem", "0.9rem"), color: "grey", margin: "10px 0", paddingRight: "50px" }}>
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>Sign in</span> or create an account to see the pricing
            <div style={{ position: "absolute", right: "8px" }}>
            <IconButton onClick={toggleFavorite} style={{ color: isFavorite ? "red" : "black" }}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
          </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
