import Link from "./Link";
import ChangeThemeButton from "./ChangeThemeButton";

const Header = () => (
  <header className='header'>
    <h1> ToDo Test </h1>
    <ul className='header__logo'>
      <li>
        <Link href='/'>Main</Link>
      </li>
      <li>
        <Link href='/Contacts'>Contacts</Link>
      </li>
      <li>
        <Link href='/AboutMe'>About Me</Link>
      </li>
    </ul>
    <ChangeThemeButton />
  </header>
);

export default Header;
