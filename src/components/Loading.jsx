import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Loading() {
  return (
    <Modal open={true}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ maxWidth: 500 }}
      >
        <Typography
          id="basic-modal-dialog-title"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Loading ...
        </Typography>
      </ModalDialog>
    </Modal>
  );
}
