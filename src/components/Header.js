import logoWhite from '../images/logoWhite.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo header__logo"
           src={logoWhite}
           alt="Логотип Место"/>
    </header>
  );
}

export default Header;
