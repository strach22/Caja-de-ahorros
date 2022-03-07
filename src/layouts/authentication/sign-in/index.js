import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Basic() {
  const navigate = useNavigate();
  const [inPassw, setInPassw] = useState(false);
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    const user = data.get("user");
    const password = data.get("password");
    event.preventDefault();
    if (user !== "123" && password !== "123") {
      setInPassw(true);
    } else {
      navigate("/inicio");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/273941303_488541149283069_7084434650500572828_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEJgbpa1cM2xEyZdXQQ56UhsZ5t5ImHhj-xnm3kiYeGP06winyfzmy_gXOaLkOHeQJY5TKY7wjAZOo2qty9bpli&_nc_ohc=UHI8bJYjf3sAX9cgVD6&_nc_ht=scontent.fuio1-2.fna&oh=00_AT8PN5fuPxSwQPPQozhtmlub1riB7SFsbH3qM9z9VT3Ujg&oe=622BC196)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inicio de Sesión
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={inPassw}
                margin="normal"
                required
                fullWidth
                id="user"
                label="Usuario"
                name="user"
                autoComplete="usuario"
                autoFocus
              />
              <TextField
                error={inPassw}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                INICIAR
              </Button>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8 }}>
                {"Copyright © "}
                <Link color="inherit" href="https://www.facebook.com/k.sytem/?ref=pages_you_manage">
                  Kathuna System
                </Link>{" "}
                {new Date().getFullYear()}.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Basic;
