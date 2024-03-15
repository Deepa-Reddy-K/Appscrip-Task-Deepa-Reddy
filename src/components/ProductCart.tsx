import { Typography } from "@mui/material";
import Image, { ImageType } from "./shared/Image";

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div style={{ flex: "0 0 calc(33.33% - 20px)", margin: "10px" }}>
      <Image
        src={image}
        alt={title}
        style={{
          height: "auto",
          width: 200,
        }}
        type={ImageType.JPEG}
      />
      <Typography variant="h5"><strong>{title}</strong></Typography>
      <Typography variant="body1" style={{ fontSize: "0.9rem", marginTop: "5px", color: "grey"}}><span style={{ textDecoration: "underline", cursor: "pointer" }}>Sign in</span> or create an account to see the pricing</Typography>
    </div>
  );
};

export default ProductCard;
