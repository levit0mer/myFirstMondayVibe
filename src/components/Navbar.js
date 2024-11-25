import React from "react";
import { Button } from "@vibe/core";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo and Title */}
      <div style={styles.leftSection}>
        <h1 style={styles.title}>
            T
            <span style={styles.titleMini}>ask</span>
            M
            <span style={styles.titleMini}>anager</span>
        </h1>
      </div>

      {/* Vibe Button */}
      <div style={styles.rightSection}>
      <Button
        onClick={() => window.open("https://vibe.monday.com/?path=/docs/getting-started--docs", "_blank")}
        kind="secondary"
        style={{
            fontSize: "14px",
            backgroundColor: "#0056e0",
            color: "#fff",
            borderRadius: "5px",
            padding: "8px 16px",
        }}
        >
        Visit Monday Vibe
        </Button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #ddd",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    margin: 0,
  },
  titleMini: {
    fontSize: "17px"
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    fontSize: "14px",
  },
};

export default Navbar;
