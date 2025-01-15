  import { Outlet, NavLink } from "react-router-dom";
  import { useState } from "react";
  import { getCategories } from "../api";

  export default function Categories() {
    const categories = getCategories();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container">
        <h1>Session Categories</h1>

        <input
          type="text"
          placeholder="Search diplomas"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        <ul className="categories">
          {filteredCategories.map(cat => (
            <li key={cat.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "category-active" : null
                }
                to={cat.id}
              >
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    );
  }
