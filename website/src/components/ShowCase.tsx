import React from "react";
import { Grid } from "@mui/material";
import Befor from "../assets/twitter.png";

const text = `🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦
🟦🟦⬜🟦🟦🟦⬜⬜⬜🟦
🟦🟦⬜⬜⬜⬜⬜⬜⬜🟦
🟦🟦⬜⬜⬜⬜⬜⬜🟦🟦
🟦🟦🟦⬜⬜⬜⬜⬜🟦🟦
🟦🟦🟦⬜⬜⬜⬜🟦🟦🟦
🟦🟦🟦🟦⬜🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦`;
export default function ShowCase() {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100vw", marginTop: 1 }}
    >
      <Grid item>
        <img src={Befor} height={140} />
      </Grid>
      <Grid item marginLeft={3}>
        <pre style={{ fontSize: 10 }}>{text}</pre>
      </Grid>
    </Grid>
  );
}
