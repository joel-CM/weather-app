import style from "./Footer.module.css";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={style.container}>
      <h3 className={style.containerTitle}>CONTACT</h3>
      <div className={style.containerIcons}>
        <AiFillGithub className={style.icon} />
        <AiFillLinkedin className={style.icon} />
      </div>
    </div>
  );
}
