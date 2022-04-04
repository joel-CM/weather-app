import style from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

export default function Layout(props) {
  return (
    <div className={style.container}>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
