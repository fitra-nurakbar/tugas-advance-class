import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import FormModal from "../../components/FormModal";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Day-5.module.css";
import { data } from "../../utils/data";

export default function Day5() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [edit, setEdit] = useState(null);
  const [index, setIndex] = useState(null);

  const handlerAdd = () => {
    setOpen(true);

    setEdit(null);
  };

  const handlerView = (user, index) => {};

  const hanlderEdit = (user, index) => {
    setOpen(true);

    setEdit(user);
    setIndex(index);
  };

  const handlerClose = () => {
    setOpen(false);
  };

  const clickSearch = () => {
    if (input.length > 0) {
      setResult(
        data.filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
      );
    } else {
      setResult(null);
    }
  };

  const notUser = (
    <div className={styles.zeroUser}>
      <h4>o</h4>
      <p>User</p>
    </div>
  );

  return (
    <Layout title={"Day 5"}>
      {/* Navbar */}
      <Navbar eventAdd={handlerAdd} />
      <Container maxWidth="lg">
        {/* Form Modal */}
        <FormModal
          data={data}
          edit={edit}
          open={open}
          index={index}
          handlerClose={handlerClose}
          setEdit={setEdit}
          setOpen={setOpen}
        />
        {/* User List */}
        {data.length > 0 ? (
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
                        <p>Name : {user.name}</p>
                        <p>Address : {user.address}</p>
                      </div>
                      <div className={styles.part}>
                        <p>Hobby : {user.hobby}</p>
                        <div>
                          <CustomButton
                            component={Link}
                            to={{ pathname: `view/${index}` }}
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              color: "white",
                              fontSize: "12px",
                              mr: 2,
                            }}
                            onClick={() => handlerView(user, index)}
                          >
                            View
                          </CustomButton>
                          <CustomButton
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              color: "white",
                              fontSize: "12px",
                            }}
                            onClick={() => hanlderEdit(user, index)}
                          >
                            Edit
                          </CustomButton>
                        </div>
                      </div>
                    </li>
                  ))
                : data.map((user, index) => (
                    <li key={index}>
                      <div className={styles.part}>
                        <p>Name : {user.name}</p>
                        <p>Address : {user.address}</p>
                      </div>
                      <div className={styles.part}>
                        <p>Hobby : {user.hobby}</p>
                        <div>
                          <CustomButton
                            component={Link}
                            to={{ pathname: `view/${index}` }}
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              color: "white",
                              fontSize: "12px",
                              mr: 2,
                            }}
                            onClick={() => handlerView(user, index)}
                          >
                            View
                          </CustomButton>
                          <CustomButton
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              color: "white",
                              fontSize: "12px",
                            }}
                            onClick={() => hanlderEdit(user, index)}
                          >
                            Edit
                          </CustomButton>
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
          </>
        ) : (
          notUser
        )}
      </Container>
    </Layout>
  );
}
