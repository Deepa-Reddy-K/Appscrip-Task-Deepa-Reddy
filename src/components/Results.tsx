// Results.tsx
import { useEffect, useState } from 'react';
import useClamp from "@/hooks/useClamp";
import { Divider, Grid, Select, Typography } from "@mui/material";
import { ArrowDown2, ArrowLeft2 } from "iconsax-react";
import FilterAccordion from "./FilterAccordion";
import ProductCard from "./ProductCart";

const Results = () => {
  const [products, setProducts] = useState<any[]>([]); // Define the type of products explicitly
  const clamp = useClamp();
  const [filtersOpen, setFiltersOpen] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

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
        <Grid container spacing={2} style={{ width: clamp("100%", "85%") }}>
          {clamp(
            <></>,
            <></>,
            filtersOpen && (
              <Grid item xs={12} md={3}>
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
                  <div key={index}>
                    <FilterAccordion
                      title={item}
                      // @ts-ignore
                      items={["Item 1", "Item 2"]}
                    />
                    <Divider />
                  </div>
                ))}
              </Grid>
            )
          )}
          <Grid container item xs={12} md={filtersOpen ? 9 : 12} spacing={2}>
            {products.map((product, index) => (
              <Grid item key={index} xs={6} sm={4} md={3}>
                <ProductCard image={product.image} title={product.title} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </center>
    </>
  );
};

export default Results;
