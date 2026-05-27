import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>BookStore</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/manage-books">
          Manage Books
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;