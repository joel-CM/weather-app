import style from "./Card.module.css";
import { useRouter } from "next/router";
// icons
import { AiFillEye } from "react-icons/ai";

export default function Card({ id, name, province, temp, description }) {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <div className={style.flexTitle}>
          <h4 className={style.title}>{name}</h4>
          <span>
            {province.length >= 20 ? `${province.slice(0, 20)}...` : province}
          </span>
        </div>
        <p className={style.containerInfo}>
          <b>
            {temp}°C | {description}
          </b>
        </p>
      </div>
      <div className={style.containerButton}>
        {/* buton desktop */}
        <button
          title="Obtener más informacíon de la ciudad"
          className={style.button}
          onClick={() => router.push(`/city/${name}`)}
        >
          Más detalles
        </button>
        {/* icon mobile */}
        <AiFillEye
          className={style.iconMobile}
          onClick={() => router.push(`/city/${name}`)}
        />
      </div>
    </div>
  );
}
