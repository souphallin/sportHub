import { Navbar } from "flowbite-react";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import "./App.css";
import Home from "./page/home/Home";
import Register from "./page/auth/register/Register";

export default function App() {
  return (
    <>
    <Register/>
      {/* <Home /> */}
      {/* <main className="flex justify-center items-center flex-col">
        <h2 className="text-center text-2xl font-bold m-5">
          This is Section Page
        </h2>
      </main> */}
    </>
  );
}
