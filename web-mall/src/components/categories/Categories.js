import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/products/ProductContext";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const Categories = () => {
  const { fetchCategory } = useContext(ProductContext);
  const [value, setValue] = useState(0);
  const categories = [
    "ALL",
    "ELECTRONICS",
    "JEWELERY",
    "MEN's CLOTHING",
    "WOMEN's CLOTHING",
  ];
  const handleChange = (e, newValue) => {
    setValue(newValue);
    fetchCategory(e.target.innerText);
  };
  return (
    <Box m={2}>
      <Paper elevation={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          centered
        >
          {categories.map((category) => (
            <Tab label={category} key={category} />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
};
