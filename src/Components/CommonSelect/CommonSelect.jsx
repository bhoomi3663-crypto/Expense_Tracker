import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CommonSelect = ({
  label = "Select",
  value,
  onChange,
  options = [],
  size = "small",
  fullWidth = true,
}) => {
  return (
    <FormControl size={size} fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
