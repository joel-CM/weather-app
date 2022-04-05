import style from "./city.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { getCityById } from "../../store/actions";

export default function City({ pageProps }) {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(getCityById(pageProps.city));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <h4>
          {city?.name}/{city.province}
        </h4>
      </div>
      <div className={style.containerInfo}>
        <h3>{city.weather?.description}</h3>
        <p>Temperatura: {city.weather?.temp}°C</p>
        <p>Velocidad del viento: {city.weather?.wind_speed}</p>
        <p>Grado de ala: {city.weather?.wing_deg}</p>
        <p>Presión: {city.weather?.pressure}</p>
        <p>Humedad: {city.weather?.humidity}</p>
        <p>Visibilidad: {city.weather?.visibility}</p>
      </div>
    </div>
  );
}

export const getServerSideProps = (ctx) => {
  return { props: { city: ctx.query.city } };
};
