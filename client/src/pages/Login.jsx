import React, { useState, useContext } from "react";
import { AuthContext } from "../Components/Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidenInput } from "../Components/styles/StyledComponents";
import googleLogo from "../assets/google-logo.svg";

const Login = () => {
  const { loginUser, createUser, loginWithGoogle } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setError(""); // Reset error on toggle
  };

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`Login failed: ${err.message}`);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    createUser(email, password, { name, username, bio })
      .then(() => {
        toast.success("Account created successfully!");
        toggleMode(); // Switch to login after registration
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`Registration failed: ${err.message}`);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // login with google account
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`Login failed: ${err.message}`);
      });
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              onSubmit={handleLogin}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Typography color="error" variant="caption">
                  {error}
                </Typography>
              )}
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleMode}>
                Sign up
              </Button>
              <div className="flex w-full items-center flex-col mt-5 gap-3">
                <Button
                  className="block"
                  fullWidth
                  onClick={handleLoginWithGoogle}
                >
                  <img
                    src={googleLogo}
                    alt="goole-logo"
                    className="w-12 h-12 inline-block"
                  />
                  Login with Google
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form
              onSubmit={handleRegister}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{ width: "10rem", height: "10rem" }} src={image} />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHidenInput type="file" onChange={handleFileChange} />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Bio"
                margin="normal"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Username"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && (
                <Typography color="error" variant="caption">
                  {error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleMode}>
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
