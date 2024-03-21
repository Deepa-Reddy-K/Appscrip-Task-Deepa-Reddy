import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { ArrowDown2 } from "iconsax-react";
import Stack from "@mui/material/Stack";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  border: "none", // Remove borders
  boxShadow: "none", // Remove shadow
  "&:before": {
    // Remove space between accordions
    display: "none",
  },
  "& .MuiAccordionSummary-content": {
    // Adjust spacing within summary
    margin: 0, // Remove default margin
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0, // Remove default padding
  minHeight: "unset", // Allow content to dictate height
}));

const FilterAccordion = ({ title = "", items = [] }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary
        style={{
          padding: "20px 5px",
        }}
        expandIcon={<ArrowDown2 color="black" size={20} />}
      >
        <Stack direction="column">
          <Typography>{title}</Typography>
          <Typography style={{ color: "grey"}}>ALL</Typography>
        </Stack>
      </StyledAccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {items.map((item, index) => (
            <>
              <FormControlLabel
                control={<Checkbox />}
                label={item}
                key={item}
              />
              <br />
            </>
          ))}
        </FormGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default FilterAccordion;
