import React, { useEffect, useState } from "react";
import Emojize from "imgle";
import { Grid, Button, Card, CardActionArea, Typography } from "@mui/material";
interface PropTypes {
  file: null | File;
  GoBack: any;
}
const reader = new FileReader();
export default function ConvertToText({ file, GoBack }: PropTypes) {
  const [text, settext] = useState<string>("");

  function ReadFile() {
    // convert image file to base64 string
    if (typeof reader.result == "string") {
      const image1 = new Image();
      image1.src = reader.result;
      console.log(reader.result);
      image1.onload = () => {
        console.log(image1);
        const [TextArr, Text] = Emojize(image1);
        settext(Text);
        console.log(Text);
      };
    }
  }

  useEffect(() => {
    reader.addEventListener("load", ReadFile, false);
    return () => {
      reader.removeEventListener("load", ReadFile);
    };
  }, []);
  useEffect(() => {
    if (file) {
      console.log("newFile");
      reader.readAsDataURL(file);
    }
  }, [file]);
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Card
          sx={{
            backgroundColor: "white",
            border: 3,
            borderColor: "primary.main",
            boxShadow: "",
          }}
        >
          <CardActionArea onClick={copyText}>
            <pre style={{ margin: 1, textAlign: "center" }}> {text}</pre>
            <Typography
              sx={{ color: "black", textAlign: "center", marginBottom: 1 }}
            >
              Press to copy
            </Typography>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ marginTop: 1 }}>
        <Button onClick={GoBack}>Try anthor Image</Button>
      </Grid>
    </Grid>
  );
}
