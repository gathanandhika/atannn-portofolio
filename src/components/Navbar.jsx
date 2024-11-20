import { PiCopyrightLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/home";

  // Function to check if a route is active (supports single or multiple paths)
  const isActive = (paths) => {
    // Normalize paths to an array
    const normalizedPaths = Array.isArray(paths) ? paths : [paths];
    return normalizedPaths.some((path) => location.pathname === path);
  };

  return (
    <nav
      data-scroll-section
      className={`lg:px-32 lg:flex items-center justify-between py-6 px-10 ${
        isContactPage ? "bg-zinc-900 text-white" : "text-zinc-950"
      }`}
    >
      {/* Sidebar dan copyright */}
      <motion.div
        whileHover={{ scale: 1, x: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center text-lg gap-2"
      >
        <div>
          <PiCopyrightLight />
        </div>
        <div>
          <Link to="/">
            Made with Love &mdash; Atannn.
          </Link>
        </div>
      </motion.div>

      {/* Navbar icons */}
      <div
        className={`m-8 flex items-center justify-center lg:gap-4 gap-4 text-2xl z-20 ${
          isContactPage ? "contact-page" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: 2.5 }} // Animasi saat hover
          whileTap={{ scale: 0.9 }} // Animasi saat tap
          className={`text-lg ${
            isActive("/about") ? "border-b border-black" : ""
          }`} // Aktifkan animasi saat halaman aktif
        >
          <Link to="/about" className="custom-link">
            About
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: 2.5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-lg ${
            isActive(["/work", "/work-dev", "/work-design"])
              ? "border-b border-black"
              : ""
          }`}
        >
          <Link to="/work" className="custom-link">
            Work
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: 2.5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-lg ${
            isActive([
              "/career",
              "/career-work",
              "/career-intern",
              "/career-organization",
              "/career-sc",
            ])
              ? "border-b border-black"
              : ""
          }`}
        >
          <Link to="/career" className="custom-link">
            Career
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: 2.5 }}
          whileTap={{ scale: 0.9 }}
          className={`text-lg ${
            isActive("/contact") ? "border-b border-white" : ""
          }`}
        >
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
