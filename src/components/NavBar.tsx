import * as React from "react";

import { PrimeReactProvider } from "primereact/api";

import type { MenuItem } from "primereact/menuitem";
import "primereact/resources/themes/viva-light/theme.css";
import "primeicons/primeicons.css";
import facultadesi from "../data/facultades.json";
import Logo from "../../public/logogris.webp";
import { Menubar } from "primereact/menubar";

export default function NavBar() {
  const items: MenuItem[] = [
    {
      label: "Inicio",
      url: "/",
    },
    {
      label: "UTA",
      items: [
        {
          label: "Filosofía",
          url: "https://www.uta.edu.ec/v4.0/index.php/institucion/filosofia",
        },
        {
          label: "Archivo Institucional",
          url: "https://www.uta.edu.ec/v4.0/index.php/institucion/archivo-institucional",
        },
        {
          label: "Marco Legal",
          url: "https://www.uta.edu.ec/v4.0/index.php/institucion/marco-legal",
        },
        {
          label: "Plan estratégico",
          url: "https://www.uta.edu.ec/v4.0/index.php/institucion/planes",
        },
        {
          label: "Gestión",
          url: "https://www.uta.edu.ec/v4.0/index.php/gestion",
        },
      ],
    },
    {
      label: "Oferta academica",
      items: [
        {
          label: "Grado",
          url: "/grado",
          items: facultadesi.map((facultad) => ({
            label: facultad.label,
            url: `/grado/${facultad.id}`,
          })),
        },
        {
          label: "Posgrado",
          url: "/posgrado",
        },
      ],
    },
    {
      label: "Plataformas virtuales",
      items: [
        {
          label: "Sistema integrado",
          url: "https://servicios.uta.edu.ec/SistemaIntegrado/Cuenta/Login?ReturnUrl=%2fSistemaIntegrado",
        },
        {
          label: "Aulas virtuales",
          url: "https://deadv.uta.edu.ec/index.php?option=com_sppagebuilder&view=page&id=7",
        },
        {
          label: "Biblioteca",
          url: "https://biblioteca.uta.edu.ec/",
        },
      ],
    },
  ];

  const start = (
    <a href="/">
      <img alt="logo" src={Logo.src} width={180} className=" xl:ml-32" />
    </a>
  );
  return (
    <PrimeReactProvider>
      <div className="card bg-slate-100 w-full sticky top-0 z-10" id="nav">
        <div className="bg-red-900 p-3 contact hidden lg:block text-slate-100">
          <div className=" flex justify-evenly">
            <div className="flex gap-8">
              <p>
                <i className="pi pi-envelope mr-3" />
                secretariageneral@uta.edu.ec
              </p>
              <p>
                <i className="pi pi-phone mr-3" />
                (03) 2521081 – (03) 2521021
              </p>
            </div>
            <div className="flex gap-7">
              <a
                href="https://www.facebook.com/UniversidadTecnicadeAmbatoOficial"
                target="_blank"
              >
                <i className="pi pi-facebook " />
              </a>
              <a
                href="https://www.instagram.com/utecnicaambato/"
                target="_blank"
              >
                <i className="pi pi-instagram " />
              </a>
              <a
                href="https://www.youtube.com/@universidadtecnicadeambato9122/videos"
                target="_blank"
              >
                <i className="pi pi-youtube " />
              </a>
              <a
                href="https://www.linkedin.com/school/universidad-t%C3%A9cnica-de-ambato/"
                target="_blank"
              >
                <i className="pi pi-linkedin " />
              </a>
              <a href="https://twitter.com/UTecnicaAmbato" target="_blank">
                <i className="pi pi-twitter " />
              </a>
            </div>
          </div>
        </div>
        <Menubar
          model={items}
          start={start}
          className=" flex justify-between  xl:mr-40 "
        />
      </div>
    </PrimeReactProvider>
  );
}
