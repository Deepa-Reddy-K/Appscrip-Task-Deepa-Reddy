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
    <footer style={{ backgroundColor: "black", color: "white", marginTop: "100px" }}>
      <Grid container spacing={6}>
      <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
        <Typography style={{fontSize: 18, padding: "10px 0px 20px 80px", paddingBottom: "30px"}}>
          <strong>BE THE FIRST TO KNOW </strong>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "10px 0px 0px 80px" }}>
          Sign up for updates from mettā muse.
        </Typography>
        <TextField
          placeholder="Enter your e-mail..."
          variant="outlined"
          InputProps={{
            style: {
              top: "10px",
              color: "black",
              backgroundColor: "white",
              width: "100%",
              left: "80px"
            },
          }}
        />
        <Button
          variant="outlined"
          style={{
            marginLeft: "100px",
            top: "15px",
            color: "white",
            backgroundColor: "transparent",
            padding: "10px"
          }}
        >
          Subscribe
        </Button>
      </Grid>
      <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
      <Typography variant="h6" style={{padding: "15px 80px", marginTop: "1px"}}><strong>CONTACT US</strong></Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>+44 221 133 5360</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>customercare@mettamuse.com</Typography>
          <Typography variant="h6" style={{padding: "15px 80px", marginTop: "20px"}}><strong>CURRENCY</strong></Typography>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", padding: "0px 80px" }}>
          <Image
            src="/AmericanFlagIcon.png"
            alt="Brand Icon"
            type={ImageType.PNG}
            style={{
              width: "50px", 
              height: "50px", 
              marginRight: "10px",
            }}
          />
          <Typography variant="body2" style={{ marginBottom: "10px" }}>USD</Typography>
          </div>
        </Grid>
        </Grid>
      <Divider style={{ backgroundColor: "white", margin: "20px 80px"}} />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6" style={{padding: "15px 80px", marginTop: "20px"}}><strong>mettā muse</strong></Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>About Us</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Stories</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Artisans</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Boutiques</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Contact Us</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>EU Compliances Docs</Typography>
        </Grid>
        <Grid item xs={12} sm={clamp(6)} md={clamp(4)}>
          <Typography variant="h6" style={{padding: "15px 80px", marginTop: "20px"}}><strong>QUICK LINKS</strong></Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>About Us</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Stories</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Artisans</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Boutiques</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>Contact Us</Typography>
          <Typography variant="body2" style={{ marginBottom: "10px", padding: "0px 80px" }}>EU Compliances Docs</Typography>
        </Grid>
        <Grid item xs={12} sm={clamp(12)} md={clamp(4)}>
          <Typography variant="h6" style={{padding: "15px 80px", marginTop: "20px" }}><strong>FOLLOW US</strong></Typography>
          <div style={{ display: "flex", alignItems: "center", padding: "0px 80px" }}>
            <InstagramIcon style={{ marginRight: "10px" }} />
            <LinkedInIcon />
          </div>
        </Grid>
      </Grid>
      <Typography align="center" style={{ padding: "20px", fontSize: 14 }}>
        Copyright © 2023 mettamuse. All rights reserved
      </Typography>
    </footer>
  );
};

export default Footer;
