import useClamp from "@/hooks/useClamp";
import { Divider, Grid, Select, Typography } from "@mui/material";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import { useState } from "react";
import FilterAccordion from "./FilterAccordion";
import ProductCard from "./ProductCart";

const product = {
  title: "Product",
  image:
    "https://demo.wpthemego.com/themes/sw_himarket/wp-content/uploads/2016/04/1.jpg",
};

const Results = () => {
  const clamp = useClamp();
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <>
      <center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: clamp("100%", "85%"),
            marginTop: "10px",
          }}
        >
          {clamp(
            <>
              {clamp(
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                  }}
                >
                  <Typography>Filter</Typography>
                </div>,
                null,
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography fontWeight="bold">3425 Items</Typography>
                  &nbsp;&nbsp;
                  <Typography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "25px",
                      color: "grey",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setFiltersOpen((prev) => !prev)}
                  >
                    <ArrowLeft2 color="black" size={20} />
                    {filtersOpen ? "HIDE" : "SHOW"} FILTERS
                  </Typography>
                </div>
              )}
              <Select
                IconComponent={() => (
                  <ArrowDown2 color="black" size={clamp(20, 22, 24)} />
                )}
                style={{
                  border: "none",
                  width: clamp("50%", "auto", "auto"),
                }}
                inputProps={{
                  style: {
                    fontSize: clamp(12, 14, 16),
                  },
                }}
                disableUnderline
                variant="standard"
                defaultValue={"Recommended"}
              >
                {[
                  "Recommended",
                  "Price - Low to High",
                  "Price - High to Low",
                  "Best selling",
                ].map((item, index) => (
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
        </div>
      </center>
      <center>
        <Divider style={{ width: clamp("100%", "85%"), marginTop: "10px" }} />
        <Grid container style={{ width: clamp("100%", "85%") }}>
          {clamp(
            <></>,
            <></>,
            filtersOpen && (
              <Grid item xs={0} lg={filtersOpen ? 3 : 0}>
                {[
                  "Ideal for",
                  "Occasion",
                  "Work",
                  "Fabric",
                  "Segment",
                  "Suitable For",
                  "Raw Materials",
                  "Pattern",
                ].map((item, index) => (
                  <>
                    <FilterAccordion
                      key={index}
                      title={item}
                      // @ts-ignore
                      items={["Item 1", "Item 2"]}
                    />
                    <Divider />
                  </>
                ))}
              </Grid>
            )
          )}
          <Grid container item xs={12} lg={filtersOpen ? 9 : 12}>
            {Array.from({ length: 25 }, (_, i) => i).map((_, index) => (
              <Grid item key={index}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </center>
    </>
  );
};

export default Results;
