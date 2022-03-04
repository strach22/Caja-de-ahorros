// layouts
import Dashboard from "layouts/dashboard";
import Depositos from "layouts/depositos";
import Clientes from "layouts/clientes";
import Addclients from "layouts/addclients";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Retiros from "layouts/retiros";
import Simulador from "layouts/simulador";
import Credito from "layouts/credito";
import CargaClientes from "layouts/cargaClientes";
import CargaValClientes from "layouts/cargaValClientes";
import CargaCreditos from "layouts/cargaCreditos";
import Historial from "layouts/historial";
import Informacion from "layouts/informacion";
import Cobranzas from "layouts/cobranzas";
import Control from "layouts/control";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },

  {
    type: "collapse",
    name: "Inicio",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/inicio",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Clientes",
    key: "clientes",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/clientes",
    component: <Clientes />,
  },
  {
    type: "collapse",
    name: "Añadir clientes",
    key: "addclients",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/addclients",
    component: <Addclients />,
  },
  {
    type: "collapse",
    name: "Depositos",
    key: "depositos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/depositos",
    component: <Depositos />,
  },
  {
    type: "collapse",
    name: "Retiros",
    key: "retiros",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/retiros",
    component: <Retiros />,
  },
  {
    type: "collapse",
    name: "Simulador",
    key: "simulador",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/simulador",
    component: <Simulador />,
  },
  {
    type: "collapse",
    name: "Credito",
    key: "credito",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/credito",
    component: <Credito />,
  },
  {
    type: "collapse",
    name: "Carga de Clientes",
    key: "cargaClientes",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/cargaClientes",
    component: <CargaClientes />,
  },
  {
    type: "collapse",
    name: "Carga Valores Clientes",
    key: "cargaValClientes",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/cargaValClientes",
    component: <CargaValClientes />,
  },
  {
    type: "collapse",
    name: "Carga Creditos",
    key: "cargaCreditos",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/cargaCreditos",
    component: <CargaCreditos />,
  },
  {
    type: "collapse",
    name: "Historial",
    key: "historial",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/historial",
    component: <Historial />,
  },
  {
    type: "collapse",
    name: "Cobranzas",
    key: "cobranzas",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/cobranzas",
    component: <Cobranzas />,
  },
  {
    type: "collapse",
    name: "Información",
    key: "informacion",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/informacion",
    component: <Informacion />,
  },
  {
    type: "collapse",
    name: "Control",
    key: "control",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/control",
    component: <Control />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
