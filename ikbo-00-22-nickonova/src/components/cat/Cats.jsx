import { NavLink, Outlet } from "react-router-dom";
import { getCats } from "./CatData";


function Cats() {
  let cats = getCats();
  return (
    <div>
      <nav className="navbar">
        {cats.map((cat) => (
          <NavLink className='App-link'
            to={`/cats/${cat.id}`}
            key={cat.id}
          >
            {cat.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}


export default Cats;