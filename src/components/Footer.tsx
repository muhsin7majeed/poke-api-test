import s from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      made with ♥ and{" "}
      <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
        PokeApi

        
      </a>
    </div>
  );
};

export default Footer;
