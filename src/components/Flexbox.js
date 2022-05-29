import { Container } from "@mui/material";
import React from "react";

const Flexbox = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1 className="bg-warning">Item One</h1>
      <h1 className="bg-danger">Item Two</h1>
      <h1 className="bg-success">Item Three</h1>
    </Container>
  );
};

export default Flexbox;
