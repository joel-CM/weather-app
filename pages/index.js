import { useEffect } from "react";
import style from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
// components
import Card from "../components/Card/Card";
// actions
import { restoreError } from "../store/actions";

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
        <h2 className={style.noSearches}>No searches yet...</h2>
      )}
      {cities?.map((e) => (
        <Card
          key={e.request.query}
          id={e.request.query}
          name={e.location.name}
          img={e.current.weather_icons[0]}
          temp={e.current.temperature}
          description={e.current.weather_descriptions[0]}
        />
      ))}
    </div>
  );
}
