import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "black",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    links: {
      display: "flex",
      gap: "25px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "500",
      padding: "5px 10px",
      borderRadius: "5px",
      transition: "all 0.3s ease",
    },
  };

  const handleHover = (e) => {
    e.target.style.background = "white";
    e.target.style.color = "black";
  };

  const handleLeave = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "white";
  };

  return (
    <nav style={styles.nav}>
      {/* LOGO */}
      <h2 style={styles.logo}>Clothing Store</h2>

      {/* NAV LINKS */}
      <div style={styles.links}>
        {["/", "/men", "/women", "/children", "/cart"].map((path, i) => {
          const names = ["Home", "Men", "Women", "Children", "Cart"];
          return (
            <Link
              key={i}
              to={path}
              style={styles.link}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              {names[i]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
