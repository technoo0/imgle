import React from "react";
import { Grid } from "@mui/material";
import DragAndDrop from "./components/DragAndDrop";
export default function HomePage() {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100vw", height: "100vh" }}
    >
      <Grid item>
        <DragAndDrop />
      </Grid>
    </Grid>
  );
}
