import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import useClamp from "@/hooks/useClamp";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image, {ImageType} from "./shared/Image";

const Footer: React.FC = () => {
  const clamp = useClamp();

  return (
    <footer style={{ backgroundColor: "black", color: "white", marginTop: "100px", padding: "20px 80px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6"><strong>BE THE FIRST TO KNOW</strong></Typography>
          <Typography variant="body2" style={{ marginBottom: "10px" }}>Sign up for updates from mettā muse.</Typography>
          <div style={{ display: "flex" }}>
            <TextField placeholder="Enter your e-mail..." variant="outlined" InputProps={{ style: { color: "black", backgroundColor: "white", marginRight: "10px" }}} />
            <Button variant="outlined" style={{ color: "white", backgroundColor: "transparent", padding: "8px", minWidth: "auto" }}>Subscribe</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6"><strong>CONTACT US</strong></Typography>
          <Typography variant="body2" style={{ marginBottom: "10px" }}>+44 221 133 5360</Typography>
          <Typography variant="body2" style={{ marginBottom: "20px" }}>customercare@mettamuse.com</Typography>
          <Typography variant="h6"><strong>CURRENCY</strong></Typography>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Image src="/AmericanFlagIcon.png" alt="Brand Icon" type={ImageType.PNG} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
            <Typography variant="body2" style={{ marginBottom: "10px" }}>USD</Typography>
          </div>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: "white", margin: "20px 0" }} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6"><strong>mettā muse</strong></Typography>
          {renderFooterLinks()}
        </Grid>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6"><strong>QUICK LINKS</strong></Typography>
          {renderFooterLinks()}
        </Grid>
        <Grid item xs={12} sm={clamp(12)} md={clamp(4)}>
          <Typography variant="h6"><strong>FOLLOW US</strong></Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <InstagramIcon style={{ marginRight: "10px" }} />
            <LinkedInIcon />
          </div>
        </Grid>
      </Grid>
      <Typography align="center" style={{ padding: "20px", fontSize: 14 }}>Copyright © 2023 mettamuse. All rights reserved</Typography>
    </footer>
  );
};

const renderFooterLinks = () => (
  <>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>About Us</Typography>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>Stories</Typography>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>Artisans</Typography>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>Boutiques</Typography>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>Contact Us</Typography>
    <Typography variant="body2" style={{ marginBottom: "10px" }}>EU Compliances Docs</Typography>
  </>
);

export default Footer;
