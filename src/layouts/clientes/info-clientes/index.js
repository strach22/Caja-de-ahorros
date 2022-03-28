import { useParams } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import clients from "../data/clients.json";

function Notifications() {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            Cliente # {id}
            <br />
            Nombres: {clients[id - 1].nombres}
            <br />
            Apellidos: {clients[id - 1].apellidos}
            <br />
            Documento: {clients[id - 1].documento}
            <br />
            Teléfono: {clients[id - 1].telefono}
            <br />
            Direccion: {clients[id - 1].direccion}
            <br />
            Correo Electrónico: {clients[id - 1].correoelectronico}
            <br />
            Tarifa: {clients[id - 1].tariff}
            <br />
            Saldo: {clients[id - 1].saldo}
          </Grid>
          <Grid item xs={12} lg={11}>
            <Button href="/clientes" variant="contained">
              REGRESAR
            </Button>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
