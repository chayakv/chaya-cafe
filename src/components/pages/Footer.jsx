import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 ChayaCafe. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#4b2e2e",
    color: "white",
    marginTop: "40px",
  },
};

export default Footer;
