import Link from "./Link";

const Footer = () => (
  <footer className='footer'>
    <h1>ToDo Footer</h1>
    <ul>
      <li>
        Phone number: <Link href='tel: +3453453'>+3453453</Link>
      </li>
      <li>
        Email: <Link href='mailto: valerii@example.com'>valerii@example.com</Link>
      </li>
      <li>
        Git: <Link href='https://github.com/test'>https://github.com/test</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
