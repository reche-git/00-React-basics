import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "100%",
  bgcolor: "#1A2027",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#fff",
  borderRadius: "16px",
};

const buttonStyle = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  display: "block",
  marginTop: "1.5rem",
  padding: "1rem",
};

export default function MyModalChild() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button onClick={handleOpen} style={buttonStyle}>
        "There is 'simple' and then... this... you know?"
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            I didn't wanted to style too much to show my progress while learning
            this library.
            <br />
            But feel free to contact me... In an interview... for the
            position 👍🏻
          </Typography>
          <p style={{ textAlign: "center" }}>
            <br />
            📩 <mark>alanaxelreche@hotmail.com</mark> 📩
          </p>
        </Box>
      </Modal>
    </div>
  );
}
