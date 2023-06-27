import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function NavLink({ href, children }) {
  return (
    <Link to={href}>
      <li className="border-r-2 border-black px-3 text-black">{children}</li>
    </Link>
  );
}
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
