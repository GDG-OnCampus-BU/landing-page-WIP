'use client'; // Required for using React hooks on client-side

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  // State for the loading screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Simulated loading delay
    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isLoading ? (
          <div style={styles.loadingScreen}>
            <img
              src="/assets/logo_gdg.png" // GDG Logo
              alt="Loading..."
              style={styles.loadingLogo}
              className="spin-animation" // Added class for animation
            />
            <h1 style={styles.loadingText}>Loading GDG Site...</h1>
          </div>
        ) : (
          <>
            <nav style={styles.nav}>
              <div style={styles.logoContainer}>
                <img src="/assets/image2.png" alt="Logo" style={styles.logo} />
              </div>
              <div style={styles.linksContainer}>
                <Link href="/home" style={styles.link}>Home</Link>
                <Link href="/team" style={styles.link}>Team</Link>
                <Link href="/blogs" style={styles.link}>Blogs</Link>
                <Link href="/projects" style={styles.link}>Projects</Link>
                <Link href="/events" style={styles.link}>Events</Link>
              </div>
            </nav>
            {children}
          </>
        )}
      </body>
    </html>
  );
}

// Styles for loading screen and navigation
const styles = {
  loadingScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#171717",
  },
  loadingLogo: {
    width: "150px",
    height: "150px",
  },
  loadingText: {
    color: "#fff",
    fontSize: "2rem",
    marginTop: "1rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "transparent",
    color: "#fff",
  },
  logoContainer: {
    flex: "0 1 auto",
  },
  logo: {
    width: "300px",
    height: "auto",
  },
  linksContainer: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-end",
    gap: "2rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.8rem",
  },
};
