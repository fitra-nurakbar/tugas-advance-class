import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

export default function FormModal(props) {
  const { data, edit, open, index, handlerClose, setEdit, setOpen } = props;
  const [user, setUser] = useState({
    name: "",
    address: "",
    hobby: "",
  });

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (edit) {
      setEdit({ ...edit, [name]: value });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    if (edit) {
      data[index] = edit;
    } else {
      data.push(user);

      setUser({
        name: "",
        address: "",
        hobby: "",
      });
    }
  };

  return (
    <Modal open={open} onClose={handlerClose}>
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
          {edit ? "EDIT" : "ADD"} USER
        </Typography>
        <form onSubmit={handlerSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus
                required
                name="name"
                value={edit ? edit.name : user.name}
                onChange={handlerChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                required
                name="address"
                value={edit ? edit.address : user.address}
                onChange={handlerChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Hobby</FormLabel>
              <Input
                required
                name="hobby"
                value={edit ? edit.hobby : user.hobby}
                onChange={handlerChange}
              />
            </FormControl>
            <CustomButton
              type="submit"
              sx={{
                textTransform: "capitalize",
                color: "black",
                maxWidth: "50%",
                marginX: "auto",
              }}
            >
              Save
            </CustomButton>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}
