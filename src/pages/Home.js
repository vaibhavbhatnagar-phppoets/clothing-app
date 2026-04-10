import React from "react";

const Home = () => {
  const styles = {
    hero: {
      position: "relative",
      height: "90vh",
      overflow: "hidden",
    },
    heroImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(60%)",
    },
    heroText: {
      position: "absolute",
      top: "50%",
      left: "10%",
      transform: "translateY(-50%)",
      color: "white",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      background: "black",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    sectionTitle: {
      textAlign: "center",
      margin: "40px 0 20px",
      fontSize: "2rem",
    },
    flexRow: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      width: "220px",
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    productCard: {
      width: "220px",
      textAlign: "center",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="fashion"
          style={styles.heroImg}
        />
        <div style={styles.heroText}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Style That Defines You
          </h1>
          <p>Discover the latest trends in fashion</p>
          <button style={styles.button}>Shop Now</button>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <h2 style={styles.sectionTitle}>Shop By Category</h2>
      <div style={styles.flexRow}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="men"
            style={styles.image}
          />
          <h3>Men</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="women"
            style={styles.image}
          />
          <h3>Women</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            alt="kids"
            style={styles.image}
          />
          <h3>Kids</h3>
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <h2 style={styles.sectionTitle}>Trending Now</h2>
      <div style={styles.flexRow}>
        <div style={styles.productCard}>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
            alt="jacket"
            style={styles.image}
          />
          <p>Stylish Jacket</p>
        </div>

        <div style={styles.productCard}>
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
            alt="tshirt"
            style={styles.image}
          />
          <p>Casual T-Shirt</p>
        </div>

        <div style={styles.productCard}>
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
            alt="jeans"
            style={styles.image}
          />
          <p>Denim Jeans</p>
        </div>
      </div>

    </div>
  );
};

export default Home;