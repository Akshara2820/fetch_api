import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "react-loading-screen";

function Contact() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        });

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fetchData();
  });

  return (
    <>
      <h1>Contact Components</h1>
      <h2> Welcome to Fake Mart!</h2>
      {loading ? (
        <LoadingScreen
          loading={true}
          bgColor="	rgb(128,128,128,0.8)"
          spinnerColor="#2adedb"
          textColor="#676767"
          logoSrc=""
          text=""
        ></LoadingScreen>
      ) : (
        <div>
          {users.map((user) => (
            <div>
              <Link to={`/contact/${user.id}`} key={user.id}>
                {" "}
                {user.title}{" "}
              </Link>
              <br></br>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Contact;
