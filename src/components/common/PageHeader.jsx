import { Container } from "react-bootstrap";
import "../../styles/pageHeader.css";


function PageHeader({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1920&q=80" }) {
  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,.45), rgba(15,76,129,.45)), url(${image})`,
      }}
    >
      <Container className="text-center page-header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Container>
    </div>
  );
}

export default PageHeader;