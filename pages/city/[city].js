import style from "./city.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// actions
import { getCountryById } from "../../store/actions";

export default function City() {
  const dispatch = useDispatch();
  const router = useRouter();
  const city = useSelector((state) => state.city);
  const [param, setParam] = useState(router.query.city);

  useEffect(() => {
    dispatch(getCountryById(param));
    console.log("holaaaaaaaaaaaaa");
  }, [param]);

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h4>{city.request?.query}</h4>
      </div>
      <div className={style.containerImg}>
        <img
          src={city.current?.weather_icons[0]}
          alt={city.current?.weather_icons[0]}
        />
      </div>
      <div className={style.containerInfo}>
        <h3>{city.current?.weather_descriptions[0]}</h3>
        <p>Temperature: {city.current?.temperature}°C</p>
        <p>Wind Speed: {city.current?.wind_speed}</p>
        <p>Wind Degree: {city.current?.wind_degree}</p>
        <p>direction of the wind: {city.current?.wind_dir}</p>
        <p>Pressure: {city.current?.pressure}</p>
        <p>Humidity: {city.current?.humidity}</p>
        <p>Cloud cover: {city.current?.cloudcover}</p>
        <p>Feels like: {city.current?.feelslike}</p>
        <p>Visibility: {city.current?.visibility}</p>
      </div>
    </div>
  );
}
