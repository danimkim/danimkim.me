import { Link } from "gatsby";
import * as React from "react";

export default function Header() {
  return (
    <header className="z-10">
      <nav>
        <ul className="border-b-2 flex h-20 justify-around items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Projects</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
