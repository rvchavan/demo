import logo from "./logo.svg";
import "./App.css";
// import Home from "../Home";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  const data = {
    Fname: "Sid",
    Lname: "Surwanshy",
    company: "TKP",
    dob: "20-10-1555",
    age: "28",
  };
  return (
    <>
      <Home title={data} />
      <Profile data="Ravi" />
    </>
  );
}

export default App;
