function PrimaryButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;