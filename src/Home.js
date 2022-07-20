import React from "react";
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const aboutpage = () => {
    navigate("/about");
  };

  const contactpage = () => {
    navigate("/contact");
  };

  return (
    <div>
      <h1>This is the home page</h1>
      <button onClick={() => aboutpage()}>
        {" "}
        Click to view our about page{" "}
      </button>
      <button onClick={() => contactpage()}>
        {" "}
        Click to view our contact page{" "}
      </button>
    </div>
  );
}
export default Home;
