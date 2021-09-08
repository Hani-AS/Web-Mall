import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const Categories = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="ALL" />
          <Tab label="ELECTRONICS" />
          <Tab label="JEWELRY" />
          <Tab label="MEN's CLOTHING" />
          <Tab label="WOMEN's CLOTHING" />
        </Tabs>
      </Paper>
    </Box>
  );
};
