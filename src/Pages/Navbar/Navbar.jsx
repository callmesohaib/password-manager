import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Create</NavLink>
        </li>
        <li>
          <NavLink to="/show">View</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
