const Button = ({ onClick, children, className = "", theme }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${theme === "dark" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-black hover:bg-gray-300"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;