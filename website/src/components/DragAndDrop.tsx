import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Grid, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];
export default function DragAndDrop() {
  const [file, setFile] = useState<null | File>(null);
  const handleChange = (newfile: File) => {
    setFile(newfile);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
      <Grid
        sx={{
          border: 3,
          borderStyle: "dashed",
          borderColor: "primary.main",
          borderRadius: 5,
          width: 500,
          height: 500,
          margin: 10,
        }}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <AddPhotoAlternateIcon />
        </Grid>
        <Grid item>
          <Typography>{file ? file.name : "Drag or Upload Image"}</Typography>
        </Grid>
      </Grid>
    </FileUploader>
  );
}
