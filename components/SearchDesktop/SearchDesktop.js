import style from "./SearchDesktop.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons
import { AiOutlineReload } from "react-icons/ai";
// components
import Icon from "../Icon/Icon";
// actions
import {
  getCountryInfo,
  setLoading,
  setIsEmptySeach,
  loadCities,
  setReloadingCities,
} from "../../store/actions";

export default function SearchDesktop() {
  const dispatch = useDispatch();
  const reloadingCities = useSelector((state) => state.reloadingCities);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountryInfo(search));
    dispatch(setLoading());
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(setIsEmptySeach(!e.target.value.trim().length));
  };

  const reloadCities = () => {
    dispatch(setReloadingCities());
    dispatch(loadCities());
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Busca una ciudad..."
        className={style.input}
        onChange={handleChange}
      />
      <div className={style.contentIcon}>
        <Icon handleSubmit={handleSubmit} />
      </div>
      <div className={style.reload}>
        <AiOutlineReload
          title="Recargar ciudades"
          className={reloadingCities ? style.rotate : style.reloadIcon}
          onClick={reloadCities}
        />
      </div>
    </form>
  );
}
