import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import MyModalChild from "./MyModalChild";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: "100%",
  bgcolor: "#1A2027",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#fff",
  padding: "1rem",
  borderRadius: "16px",
};

const styleButton = {
  position: "fixed",
  height: "4rem",
  width: "4rem",
  fontSize: "3rem",
  top: "2rem",
  left: "2rem",
};

export default function MyModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button onClick={handleOpen} sx={styleButton}>
        ❔
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", backgroundColor: "#05458F" }}
          >
            This project looks... wonky, right?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This first project was an introduction about React js. and his
            relation with JavaScript, with the subtle differences between html
            and JSX.
            <br />
            In this project you will find an <b>applied</b> introduction about:
          </Typography>
          <ul>
            <li>The differences working with JSX and HTML tags.</li>
            <li>The use of JavaScript in React.</li>
            <li>
              Notions about class, functional and pure components, properties,
              the state, etc. Notions from ES5 to ES6.
            </li>
            <li>Conditional rendering.</li>
            <li>Events.</li>
            <li>Hooks such as useEffect, useState and useRef.</li>
            <li>How to create a Form.</li>
            <li>How to style your components in different ways.</li>
          </ul>
          <Typography>
            It is highly recomended that you open the repository for this
            project at:{" "}
            <a
              href="https://github.com/reche-git/00-React-basics"
              rel="noreferrer"
              target="_blank"
            >Github</a>
          </Typography>
          <MyModalChild />
        </Box>
      </Modal>
    </div>
  );
}
