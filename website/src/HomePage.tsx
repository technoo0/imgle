import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const ResetFile = () => {
      if (file) {
        setFile(null);
      }
    };
    window.addEventListener("dragover", ResetFile);
    return () => {
      window.removeEventListener("dragover", ResetFile);
    };
  }, [file, setFile]);
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
      >
        <Grid item>
          <ShowCase />
        </Grid>
        <Grid item sx={{ width: "90%", marginBottom: 25 }}>
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
