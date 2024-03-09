import { Box, Typography } from "@mui/material";
import React from "react";

const InsertEditBox = ({ children, isAddMode, title }) => {
  return (
    <Box sx={{ background: "white", borderRadius: 3, border: 1, p: 3, mb: 2 }}>
      <Typography variant="h6" align="center" color="primary.dark">
        {isAddMode ? <>Adicionar {title}</> : <>Atualizar {title}</>}
      </Typography>
      {children}
    </Box>
  );
};

export default InsertEditBox;
