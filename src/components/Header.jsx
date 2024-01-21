import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="logo"><NavLink to={'/'}>
          Quiz
        </NavLink></div>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/result/:correctAnswer/:qesNo/:studentId'}>
                Score
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;