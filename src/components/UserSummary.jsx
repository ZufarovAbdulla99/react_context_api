import { useContext } from "react";
import { UserContext } from "../App";

const UserSummary = () => {
  const { username, email, age, theme } = useContext(UserContext);

  return (
    <div className={`p-4 rounded ${theme === "dark" ? "bg-gray-600 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-lg font-semibold mb-2">User Summary</h2>
      <p>Username: {username || "Not provided"}</p>
      <p>Email: {email || "Not provided"}</p>
      <p>Age: {age || "Not provided"}</p>
    </div>
  );
};

export default UserSummary;