import styled from "@emotion/styled";
import Image, { ImageType } from "./shared/Image";
import useClamp from "@/hooks/useClamp";
import {
  Heart,
  Profile,
  SearchNormal1,
  ShoppingBag,
  ArrowDown2,
  HambergerMenu,
} from "iconsax-react";
import { Divider, NativeSelect, Select, Typography } from "@mui/material";

const Header = styled("header")`
  background-color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CenteredDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const AppBar = () => {
  const clamp = useClamp();

  return (
    <>
      <Header>
        <MenuContainer>
          {clamp(<HambergerMenu color="black" size={clamp(20)} />, <></>)}
          <Image
            src="/logo-small.png"
            alt="Brand Icon"
            type={ImageType.PNG}
            style={{
              width: clamp(20, 25, 30),
              height: clamp(20, 25, 30),
            }}
          />
        </MenuContainer>
        <div>
          <Image
            src="/logo-long.png"
            alt="Brand Name"
            type={ImageType.PNG}
            style={{
              width: "auto",
              height: clamp(30, 35, 40),
            }}
          />
        </div>
        <MenuContainer>
          <SearchNormal1 color="black" size={clamp(20, 22, 24)} />
          <Heart color="black" size={clamp(20, 22, 24)} />
          <ShoppingBag color="black" size={clamp(20, 22, 24)} />
          {clamp(
            <></>,
            <></>,
            <>
              <Profile color="black" size={clamp(20, 22, 24)} />
              <Select
                IconComponent={() => (
                  <ArrowDown2 color="black" size={clamp(20, 22, 24)} />
                )}
                style={{
                  border: "none",
                }}
                inputProps={{
                  style: {
                    fontSize: clamp(12, 14, 16),
                  },
                }}
                disableUnderline
                variant="standard"
                defaultValue={"ENG"}
              >
                {["ENG", "FRE", "GER", "ITA", "SPA"].map((item, index) => (
                  <option
                    key={index}
                    value={item}
                    style={{ padding: "5px", cursor: "pointer" }}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </>
          )}
        </MenuContainer>
      </Header>
      {clamp(
        <></>,
        <></>,
        <>
          <br />
          <CenteredDiv>
            {["SHOP", "SKILLS", "STORIES", "ABOUT US", "CONTACTS", " "].map(
              (item, index) => (
                <Typography key={index} fontSize={18} fontWeight="bold">
                  {item}
                </Typography>
              )
            )}
          </CenteredDiv>
        </>
      )}
      <Divider style={{ width: "100%", marginTop: "10px" }} />
      <CenteredDiv>
        <center>
          <div style={{ margin: `${clamp(20, 30, 40)}px 0px` }}>
            <Typography variant="h4">DISCOVER OUR PRODUCTS</Typography>
            <br />
            <Typography style={{ maxWidth: "600px" }}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </Typography>
          </div>
        </center>
      </CenteredDiv>
      <center>
        <Divider style={{ width: clamp("100%", "85%") }} />
      </center>
    </>
  );
};

export default AppBar;
