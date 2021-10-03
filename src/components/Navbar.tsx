import { useDispatch } from "react-redux";
import { toggleDarkMode } from "redux/config/actions";
import { Link } from "react-router-dom";

import pokeball from "assets/pokeball.png";

import s from "./navbar.module.scss";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

interface Props {
  darkMode: boolean;
}

const Navbar = ({ darkMode }: Props) => {
  const dispatch = useDispatch();

  function handleDarkMode() {
    dispatch(toggleDarkMode(!darkMode));
  }

  return (
    <nav className={`container ${s.wrapper}`}>
      <div className={s.left}>
        <Link to="/">
          <img src={pokeball} alt="Wiki-Poke" />
        </Link>
      </div>

      <div className={s.right}>
        <button type="button" name="Toggle Dark Mode" onClick={handleDarkMode}>
          {darkMode ? <SunIcon size={50} fill="yellow" /> : <MoonIcon size={50} fill="white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
