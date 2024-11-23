import React from "react";
import Header from "../../components/header/Header.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Outlet,
} from "react-router-dom";
import SideMenu from "../../components/side-menu/sideMenuView";
import {
  FaClipboardList,
  FaBook,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";

function SecretaryPage() {
  const sideMenuItens = [
    {
      icon: <FaClipboardList />,
      name: "Chamados",
      route: "/secretaria",
    },
    {
      icon: <FaBook />,
      name: "Publicações",
      route: "/secretaria/publicacao",
    },
    {
      icon: <FaTools />,
      name: "Gerenciar",
      route: "/secretaria/gerencia",
    },
  ];

  return (
    <React.StrictMode>
      <main className="flex">
        <aside className="lg:block md:hidden">
          <SideMenu menuItens={sideMenuItens} />
        </aside>
        <section className="flex flex-col w-full h-screen">
          <Header />
          <Outlet />
          <aside className="lg:hidden md:block fixed bottom-0 left-0 right-0 z-50">
            <SideMenu menuItens={sideMenuItens} />
          </aside>
        </section>
      </main>
    </React.StrictMode>
  );
}

export default SecretaryPage;
