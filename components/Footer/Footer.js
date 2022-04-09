import style from "./Footer.module.css";
import Link from "next/link";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={style.container}>
      <h3 className={style.containerTitle}>CONTACT</h3>
      <div className={style.containerIcons}>
        <Link href={"https://github.com/joel-CM"}>
          <AiFillGithub className={style.icon} />
        </Link>
        <Link href={"https://www.linkedin.com/in/joel-c-dev/"}>
          <AiFillLinkedin className={style.icon} />
        </Link>
      </div>
    </div>
  );
}
