import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginTop: 1 }}
    >
      <Grid item>
        <Link href="/">
          <img src={Logo} alt={"logo"} width={300} />
        </Link>
      </Grid>
    </Grid>
  );
}
