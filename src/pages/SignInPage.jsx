import React, { useEffect, useState } from "react";
// mui
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import GoogleIcon from "@mui/icons-material/Google";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { useAppContext } from "../context";

function SignInPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("users")) {
      const users = JSON.parse(localStorage.getItem("users"));

      if (
        users.filter(
          (user) => user.email === email && user.password === password
        ).length > 0
      ) {
        navigate("/products");
        setUserAuthState(true);
        localStorage.setItem("isLoggedIn", true);
      } else {
        console.log("please register");
        setSnackbarOpen(true);
      }
    } else {
      console.log("please register");
    }
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
          message="User Not Exist"
          action={action}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        />
      </div>
      <div>
        <Alert severity="error">please register!</Alert>;
        <div className="main">
          <Container
            maxWidth="sm"
            sx={{ backgroundColor: "#f2f1", mt: "12%", p: 2 }}
          >
            <form
              className="registration_form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h2>Login page</h2>
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
                sx={{ mb: 1 }}
                disabled={!email || !password}
                className="logIn"
                type="submit"
                variant="contained"
              >
                logIn
              </Button>
              <Button className="exist">
                <Link to="/registration" sx={{}}>
                  New User
                </Link>
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
