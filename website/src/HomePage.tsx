import React, { useState } from "react";
import { Grid } from "@mui/material";
import DragAndDrop from "./components/DragAndDrop";
import Header from "./components/Header";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import ConvertToText from "./components/ConvertToText";
export default function HomePage() {
  const [file, setFile] = useState<null | File>(null);
  const handleChange = (newfile: File) => {
    setFile(newfile);
  };
  const GoBack = () => {
    setFile(null);
  };
  return (
    <>
      <Header />
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100vw" }}
      >
        <Grid item>
          <ShowCase />
        </Grid>
        <Grid item>
          {file ? (
            <ConvertToText file={file} GoBack={GoBack} />
          ) : (
            <DragAndDrop file={file} handleChange={handleChange} />
          )}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
