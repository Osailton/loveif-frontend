import { Typography } from "@mui/material";
import React from "react";

const ErrorField = ({ children }) => {
  return (
    <Typography variant="subtitle1" sx={{ color: "red" }}>
      {children}
    </Typography>
  );
};

export default ErrorField;
