import { Button } from "react-bootstrap";
import { FaChevronUp } from "react-icons/fa";
import './BackToTop.css';

function BackToTop() {
  return (
    <Button
      className="top-button position-fixed border-0"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaChevronUp />
    </Button>
  );
}

export default BackToTop;
