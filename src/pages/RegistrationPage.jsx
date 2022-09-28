import React, { useState } from "react";

// mui
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { useAppContext } from "../context";

function RegistrationPage() {
  const { setUserAuthState } = useAppContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarErrorMsg, setSnackbarErrorMsg] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }

    if (users.find((user) => user.email === email)) {
      console.log("email already exist");
      // show this alert
      setSnackbarOpen(true);
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setUserAuthState(true);
    navigate("/products");
  };
  // snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <div className="Snackbar">
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message="email already exist"
          action={action}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        />
      </div>
      <div className="main">
        <Container
          maxWidth="sm"
          sx={{ backgroundColor: "#f2f1", mt: "10%", p: 2, border: 1 }}
        >
          <form
            className="registration_form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h2>Registration page</h2>
            <div className="inputs">
              <TextField
                fullWidth
                margin="dense"
                type={"email"}
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                margin="dense"
                type={"password"}
                label="password"
                variant="outlined"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              fullWidth
              sx={{ mb: 1, mt: 1 }}
              disabled={!email || !password}
              className="Register"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <div className="btn_container_two">
              <Button className="exist">
                <Link to="/" sx={{}}>
                  Exist User
                </Link>
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}

export default RegistrationPage;
