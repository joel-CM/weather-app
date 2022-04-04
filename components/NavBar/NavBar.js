import style from "./NavBar.module.css";
import { useRouter } from "next/router";
import SearchDesktop from "../SearchDesktop/SearchDesktop";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <button className={style.title} onClick={() => router.push("/")}>
          Weather App
        </button>
      </div>
      <div className={style.containerMenu}>
        <SearchDesktop />
      </div>
    </div>
  );
}
