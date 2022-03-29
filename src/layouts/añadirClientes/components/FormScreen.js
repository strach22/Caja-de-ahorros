import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";

import MDTypography from "components/MDTypography";

export default function FormScreen() {
  return (
    <form>
      <Box
        sx={{
          border: "3px solid grey",
          background: "rgb(255,255,255)",
          boxShadow: "3px 3px grey",
          borderRadius: 4,
        }}
      >
        <Box
          display="flex"
          sx={{
            border: "1px solid grey",
            background: "grey",
            borderRadius: 3,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MDTypography padding={3} variant="h1" color="light" sx={{ textAlign: "center" }}>
                Crear Cliente
              </MDTypography>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex">
          <Box flex={1.3} p="1.5em" mr="1em">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Nombres" name="nombres" sx={{ width: 500 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Apellidos"
                  name="apellidos"
                  sx={{ width: 500 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Cédula de Identidad"
                  name="ci"
                  sx={{ width: 500 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Número de teléfono"
                  name="phono"
                  sx={{ width: 500 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Email" name="email" sx={{ width: 500 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Dirección"
                  name="direccion"
                  sx={{ width: 500 }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box flex={1} p="1.5em" ml="1em">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl
                  sx={{
                    padding: "15px 80px 30px 40px",
                    border: "2px double grey",
                    borderRadius: 4,
                    boxShadow: "3px 3px grey",
                  }}
                >
                  <FormLabel id="demo-controlled-radio-buttons-group" sx={{ paddingBottom: 2 }}>
                    Tarifa
                  </FormLabel>
                  <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="tariff">
                    <FormControlLabel value="particular" control={<Radio />} label="Particular" />
                    <FormControlLabel value="socio" control={<Radio />} label="Socio" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="filled" sx={{ m: 1, width: 230, height: 50 }}>
                  <InputLabel id="demo-simple-select-filled-label">Estado Civil</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    label="Estado Civil"
                  >
                    <MenuItem>Soltero/a</MenuItem>
                    <MenuItem>Casado/a</MenuItem>
                    <MenuItem>Viudo/a</MenuItem>
                    <MenuItem>Unión Libre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de Nacimiento"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

// {/* <Box sx={{ width: 1000, height: 100, border: "1px solid black" }}> */}
