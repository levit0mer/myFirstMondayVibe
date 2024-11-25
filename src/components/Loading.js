import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../assets/loading.json"; // Ensure this path matches your file location

function Loading() {
  return (
    <div style={styles.container}>
      <Player
        autoplay
        loop
        src={loadingAnimation} // Use the imported Lottie file
        style={{ height: "150px", width: "150px" }}
      />
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  text: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#555",
  },
};

export default Loading;
