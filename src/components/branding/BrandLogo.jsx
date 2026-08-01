import { Link } from "react-router-dom";
import "../../styles/branding.css";

function BrandLogo() {
  return (
    <Link to="/" className="brand-logo text-decoration-none">
      <img
        src="/logo.png"
        alt="BlueWave Car Wash & AutoSpa"
        className="brand-image"
      />

      <div className="brand-text">
        <h4>BlueWave</h4>
        <span>Car Wash & AutoSpa</span>
      </div>
    </Link>
  );
}

export default BrandLogo;