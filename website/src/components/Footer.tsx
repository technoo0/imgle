import { Grid, Typography, Link } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          padding: 2,
          backgroundColor: "primary.main",
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      >
        <Grid item justifyContent={"center"} alignItems={"center"}>
          <Typography>Published under the MIT License</Typography>
          <Typography>© Copyright 2022 Marwan Fouda</Typography>
        </Grid>
        <Grid item justifyContent={"center"} alignItems={"center"}>
          <Typography>
            <Link href="https://github.com/technoo0/imgle" color="inherit">
              GitHub
            </Link>
          </Typography>
          <Typography>
            <Link href="https://www.npmjs.com/package/imgle" color="inherit">
              NPM
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
