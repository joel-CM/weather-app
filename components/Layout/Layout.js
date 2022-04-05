import style from "./Layout.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// actions
import { loadCities } from "../../store/actions";

export default function Layout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCities());
  }, []);

  return (
    <div className={style.container}>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
