import { useEffect } from "react";
import style from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
// components
import Card from "../components/Card/Card";
// actions
import { restoreError } from "../store/actions";
// icons{
import { BsEmojiFrown } from "react-icons/bs";

export default function Index() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (error) {
      alert("Country or city not fouund!");
      dispatch(restoreError());
    }
  }, [error]);

  return (
    <div className={style.container}>
      {!cities.length && (
        <h2 className={style.noSearches}>
          Without results <BsEmojiFrown className={style.noSearchesIcon} />
        </h2>
      )}
      {cities?.map((e) => (
        <Card
          key={e._id}
          id={e._id}
          name={e.name}
          province={e.province}
          temp={e.weather.temp}
          description={e.weather.description}
        />
      ))}
    </div>
  );
}
