// import { useParams,useState,useEffect } from "react-router-dom";
// import axios from 'axious'

import LoadingScreen from "react-loading-screen";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data1, setData1] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => {
        setData1(json);
        setTimeout(()=>{
          setLoading(false);

        },3000)
       
      });
  }, [id]);

  return (
    <div>
      <h1>Details page {id}!</h1>
      {loading ? (
        <LoadingScreen
        loading={true}
        bgColor="rgba(255,255,255,0.8)"
        spinnerColor="#2adedb"
        textColor="#676767"
        logoSrc=""
        text=""
      ></LoadingScreen>
      ) : (
        <div>
          <h3> title: {data1.title}</h3>
          <h3> Price: ${data1.price}</h3>
          <img className="image-size " src={data1.image}></img>
        </div>
      )}
      
    </div>
  );
}
export default Details;
