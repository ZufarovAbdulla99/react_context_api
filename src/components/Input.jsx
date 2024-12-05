const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  theme,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 w-full ${theme === "dark" ? "bg-gray-950 text-white" : ""} ${className}`}
    />
  );
};

export default Input;