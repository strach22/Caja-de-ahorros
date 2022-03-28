/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDTypography from "components/MDTypography";
import clients from "./clients.json";

export default function data() {
  return {
    columns: [
      { Header: "código", accessor: "codigo", align: "left" },
      { Header: "nombres", accessor: "nombres", align: "left" },
      { Header: "apellidos", accessor: "apellidos", align: "left" },
      { Header: "documento", accessor: "documento", align: "center" },
      { Header: "teléfono", accessor: "telefono", align: "center" },
      { Header: "tarifa", accessor: "tariff", align: "center" },
      { Header: "acción", accessor: "accion", align: "center" },
    ],

    rows: clients.map((cliente) => ({
      codigo: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.codigo}
        </MDTypography>
      ),
      nombres: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.nombres}
        </MDTypography>
      ),
      apellidos: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.apellidos}
        </MDTypography>
      ),
      documento: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.documento}
        </MDTypography>
      ),
      telefono: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.telefono}
        </MDTypography>
      ),
      socio: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {cliente.tariff}
        </MDTypography>
      ),
      accion: (
        <MDTypography
          component="a"
          href={`clientes/${cliente.codigo}`}
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          Ver
        </MDTypography>
      ),
    })),
  };
}
