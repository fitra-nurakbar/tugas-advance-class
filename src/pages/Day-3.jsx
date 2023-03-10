import React, { useState } from "react";
import Layout from "../components/Layout";
import { styled } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import styles from "../styles/Day-3.module.css";

const AddUser = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: lightBlue[300],
  "&:hover": {
    backgroundColor: lightBlue[700],
  },
}));

export default function Day3() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    address: "",
    hobby: "",
  });

  const handlerChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    setUsers((prevUsers) => {
      const updateUsers = [...prevUsers];
      updateUsers.push(user);
      return updateUsers;
    });
  };

  return (
    <Layout title={"Day 3"}>
      <section className={styles.container}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My App
              </Typography>
              <AddUser
                variant="contained"
                sx={{ textTransform: "capitalize", color: "white" }}
                onClick={() => setOpen(true)}
              >
                Add User
              </AddUser>
              <Modal open={open} onClose={() => setOpen(false)}>
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
                    Add User
                  </Typography>
                  <form onSubmit={handlerSubmit}>
                    <Stack spacing={2}>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          autoFocus
                          required
                          name="name"
                          onChange={handlerChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input
                          required
                          name="address"
                          onChange={handlerChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Hobby</FormLabel>
                        <Input required name="hobby" onChange={handlerChange} />
                      </FormControl>
                      <AddUser
                        type="submit"
                        sx={{
                          textTransform: "capitalize",
                          color: "black",
                          maxWidth: "50%",
                          marginX: "auto",
                        }}
                      >
                        Save
                      </AddUser>
                    </Stack>
                  </form>
                </ModalDialog>
              </Modal>
            </Toolbar>
          </AppBar>
        </Box>
        {users.length > 0 ? (
          <ul className={styles.userList}>
            {users.map((user, index) => (
              <li key={index}>
                <div>
                  <h6>{user.name}</h6>
                  <p>{user.address}</p>
                </div>
                <p>{user.hobby}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.zeroUser}>
            <h4>o</h4>
            <p>User</p>
          </div>
        )}
      </section>
    </Layout>
  );
}
