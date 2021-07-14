import React from "react";

export const NavBar: React.FC = (): JSX.Element => (
  <nav>
      <div className="nav-wrapper purple darken-1 px1">
        <a href="/" className="brand-logo">React-TypeScript</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">ToDoList</a></li>
          <li><a href="/">Information</a></li>
        </ul>
    </div>
  </nav>
)