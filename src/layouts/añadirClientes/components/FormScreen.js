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
      <Box p="1em">
        <Box display="flex">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MDTypography padding={2} variant={2}>
                Crear Cliente
              </MDTypography>
            </Grid>
            <Grid item xs={12}>
              <MDTypography padding={2} variant={2}>
                Datos de Cliente
              </MDTypography>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex">
          <Box flex={1.3} mr="1em">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Nombres" name="nombres" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Apellidos" name="apellidos" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Cédula de Identidad" name="ci" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Número de teléfono" name="phono" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Email" name="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Dirección" name="direccion" />
              </Grid>
            </Grid>
          </Box>

          <Box flex={1} ml="1em">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Tarifa</FormLabel>
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
