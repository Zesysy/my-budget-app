import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 w-full">
      <nav>
        <ul className="flex space-x-4">
          {" "}
          {/* Ajout d'un espacement entre les éléments */}
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/list-envelopes">Enveloppes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
