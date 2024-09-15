import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "./usercontext/usercontext";
import UserContextProvider from "./contextprovider/contextprovider";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({username, password});
  }, [password, username]);

  return (
    <div className="bg-red-400 h-2/4 w-screen text-center p-10">
      <h1 className="text-4xl py-10">Login</h1>
      <h1 className="font-bold my-5" >Enter details as per your Linkdin account</h1>
      <label htmlFor="name">UserName:</label>
      {"  "}
      <input
        id="name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-sm"
      />{" "}
      <label htmlFor="pass">Password:</label>
      {"  "}
      <input
        id="pass"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-sm"
      />
      <div>welcome: {user.username}</div>
    </div>
  );
}

export default App;
