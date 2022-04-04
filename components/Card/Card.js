import style from "./Card.module.css";
import { useRouter } from "next/router";

export default function Card({ id, name, img, temp, description }) {
  const router = useRouter();

  return (
    <div className={style.container} onClick={() => router.push(`/city/${id}`)}>
      <h4 className={style.title}>{name}</h4>
      <div className={style.info}>
        <h5>{description}</h5>
        <p>{temp}°C</p>
      </div>
      <div className={style.imgContent}>
        <img src={img} alt="nublado" />
      </div>
    </div>
  );
}
