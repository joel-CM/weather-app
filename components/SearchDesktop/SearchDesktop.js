import style from "./SearchDesktop.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Icon from "../Icon/Icon";
// actions
import {
  getCountryInfo,
  setLoading,
  setIsEmptySeach,
} from "../../store/actions";

export default function SearchDesktop() {
  const dispatch = useDispatch();
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

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search a country or city"
        className={style.input}
        onChange={handleChange}
      />
      <div className={style.contentIcon}>
        <Icon handleSubmit={handleSubmit} />
      </div>
    </form>
  );
}
