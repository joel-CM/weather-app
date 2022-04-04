import style from "./Icon.module.css";
import { useSelector } from "react-redux";
// icons
import { BiSearchAlt2 } from "react-icons/bi";
import { ImSpinner5 } from "react-icons/im";

export default function Icon({ handleSubmit }) {
  const loading = useSelector((state) => state.loading);
  const isEmpty = useSelector((state) => state.isEmptySearch);

  return (
    <button
      disabled={isEmpty}
      type="submit"
      onClick={handleSubmit}
      className={style.button}
    >
      {loading ? (
        <ImSpinner5 className={style.loadingIcon} />
      ) : (
        <BiSearchAlt2 className={style.icon} />
      )}
    </button>
  );
}
