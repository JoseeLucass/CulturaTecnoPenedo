import "./barratopo.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function BarraTopo() {
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleButtonClick = () => {
    window.location.href = "https://culturatecnopenedo-realidade-aumentada.vercel.app/";
  };

  const toggleDrawer = () => {
    setDrawerAberto((prev) => !prev);
  };

  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchEndX - touchStartX;

    if (distance > 50) {
      setDrawerAberto(true);
    } else if (distance < -50) {
      setDrawerAberto(false);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  }, [touchStartX, touchEndX]);

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <>
      <div className="Navbar">
        <div className="Navbar__Brand">
         <Link to="/" className="Navbar__Brand">CulturaTecnoPenedo</Link>
          </div>

        <div className="Navbar__Links">
          <Link to="/card" className="Navbar__Link">Pontos Turísticos</Link>
          <Link to="/sobre" className="Navbar__Link">Instruções</Link>
          <div className="Navbar__Link" onClick={handleButtonClick}>
            Realidade Aumentada
          </div>
        </div>

        <div className="Navbar__Toggle" onClick={toggleDrawer}>
          <FaBars />
        </div>
      </div>

      <div className={`Drawer ${drawerAberto ? "open" : ""}`}>
        <div className="Drawer__Header">
          <div className="Drawer__Close" onClick={toggleDrawer}>
            <FaTimes />
          </div>
        </div>
        <nav className="Drawer__Items"> 
          <Link to="/card" className="Drawer__Link" onClick={toggleDrawer}>
            Pontos Turísticos
          </Link>
          <Link to="/sobre" className="Drawer__Link" onClick={toggleDrawer}>
            Instruções
          </Link>
          <div className="Drawer__Link" onClick={() => { handleButtonClick(); toggleDrawer(); }}>
            Realidade Aumentada
          </div>
        </nav>
      </div>

      {drawerAberto && <div className="Backdrop" onClick={toggleDrawer}></div>}
    </>
  );
}
