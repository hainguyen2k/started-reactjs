import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface propsType {
  name: string;
}
export default function Header(props: propsType) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h1">
        Hello. This is a exercise practice components and props from{" "}
        {props.name}
      </Typography>
    </Box>
  );
}
