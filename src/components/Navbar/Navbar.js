import React, { useEffect, useState } from "react";
import "./Navbar.css";
import icon from "../../assets/images/icon2.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={icon} alt="PennyPals Logo" />
        </Link>
      </div>

      <div className="nav-list">
        <ul>
          <li>
            <Link to="/" className="up">Home</Link>
          </li>

          {user && (
            <>
              <li>
                <Link to="/grade" className="up">Lessons</Link>
              </li>
              <li>
                <Link to="/pet-shop" className="up">Pet Shop</Link>
              </li>
              <li>
                <Link to="/investments" className="up">Invest</Link>
              </li>
              <li className="coins">🪙 120</li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link to="/sign-in" className="up">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-up" className="up">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;