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
import styles from "../styles/Day-4.module.css";

const AddUser = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  backgroundColor: lightBlue[300],
  "&:hover": {
    backgroundColor: lightBlue[700],
  },
}));

export default function Day4() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [edit, setEdit] = useState(null);
  const [index, setIndex] = useState(null);
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

  const handlerAdd = () => {
    setOpen(true);

    setEdit(null);
  };

  const hanlderEdit = (user, index) => {
    setOpen(true);

    setEdit(user);
    setIndex(index);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    if (edit) {
      setUsers((prevUsers) => {
        const updateUsers = [...prevUsers];
        updateUsers[index] = edit;
        return updateUsers;
      });
    } else {
      setUsers((prevUsers) => {
        const updateUsers = [...prevUsers];
        updateUsers.push(user);
        return updateUsers;
      });

      setUser({
        name: "",
        address: "",
        hobby: "",
      });
    }
  };

  const clickSearch = () => {
    if (input.length > 0) {
      setResult(
        users.filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
      );
    } else {
      setResult(null);
    }
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
                onClick={handlerAdd}
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
                    {edit ? "Edit" : "Add"} User
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
          <>
            <div className={styles.seacrhBar}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "50px",
                  border: "2px solid black",
                  padding: "5px 50px",
                  color: "black",
                }}
                onClick={clickSearch}
              >
                search
              </Button>
              <input
                type="text"
                style={{ border: "2px solid black", padding: "10px" }}
                placeholder="Search name"
                onChange={(e) => setInput(e.target.value)}
              ></input>
            </div>
            <ul className={styles.userList}>
              {result
                ? result.map((user, index) => (
                    <li key={index}>
                      <div className={styles.part}>
                        <h6>Name : {user.name}</h6>
                        <p>Address : {user.address}</p>
                      </div>
                      <div className={styles.part}>
                        <p>Hobby : {user.hobby}</p>
                        <AddUser
                          variant="contained"
                          sx={{
                            textTransform: "capitalize",
                            color: "white",
                            fontSize: "12px",
                          }}
                          onClick={() => hanlderEdit(user, index)}
                        >
                          Edit
                        </AddUser>
                      </div>
                    </li>
                  ))
                : users.map((user, index) => (
                    <li key={index}>
                      <div className={styles.part}>
                        <h6>Name : {user.name}</h6>
                        <p>Address : {user.address}</p>
                      </div>
                      <div className={styles.part}>
                        <p>Hobby : {user.hobby}</p>
                        <AddUser
                          variant="contained"
                          sx={{
                            textTransform: "capitalize",
                            color: "white",
                            fontSize: "12px",
                          }}
                          onClick={() => hanlderEdit(user, index)}
                        >
                          Edit
                        </AddUser>
                      </div>
                    </li>
                  ))}
            </ul>
          </>
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
