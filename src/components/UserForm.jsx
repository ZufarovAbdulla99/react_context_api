import { useContext } from "react";

import Input from "./Input";
import Button from "./Button";
import { UserContext } from "../App";

const UserForm = () => {
  const { username, setUsername, email, setEmail, age, setAge, theme } =
    useContext(UserContext);

  return (
    <div className="space-y-4">
      <Input value={username} onChange={setUsername} theme={theme} placeholder="Username" />
      <Input
        type="email"
        value={email}
        onChange={setEmail}
        theme={theme}
        placeholder="Email"
      />
      <Input type="number" value={age} onChange={setAge} theme={theme} placeholder="Age" />
      <Button onClick={() => alert("Form submitted!")} theme={theme} className="w-full">
        Submit
      </Button>
    </div>
  );
};

export default UserForm;