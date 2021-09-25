import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import Tilt from "react-tilt";
import fdata from "./formdata.json";
import randomColor from "randomcolor";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(fdata);

  function funFilter(s) {
    setSearch(s);
    if(s==="") {
      setData(fdata);
    }
    else {
      setData(data.filter((d) => d.Name.toLowerCase().includes(s.toLowerCase())));
    }
  }

  return (
    <div>
      <Particles id="tsparticles" url="/particles.json" />
      <br />
      <div style={{ color: "white", textAlign: "center" }}>
        <h1 style={{color: randomColor({luminosity:'bright', format: 'rgb'})}}><em>FOOD-THEMED WEBSITES</em></h1>
        <h3 style={{color: randomColor({luminosity:'bright', format: 'rgb'})}}>FSWD A0821 Batch</h3>
        <h4><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/nikhil-agarwal-85a203189/">~ Nikhil Agarwal</a></h4>
        <br/>
      </div>
      <br/>
      <div style={{display:"flex", justifyContent:"center"}}>
        <input style={{textAlign:"center", border:"0", borderRadius:"50px", width:"20%", height:"35px", fontSize:"20px", color: randomColor({luminosity:'bright', format: 'rgb'})}} placeholder="Search Name..." value={search} onChange={(e)=> funFilter(e.target.value)} type="search"></input>
      </div>
      <br/>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-evenly",
        }}
      >
        {data &&
          data.map((item) => (
            <div key={item.id} style={{ width: "30%" }}>
              <Tilt>
                <a href={item["Food Themed - Website Link"]}>
                  <Card
                    style={{
                      background: randomColor({luminosity:'dark', hue: 'black', format: 'hsla'}),
                      color: "white"
                    }}
                  >
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title><b>{item.Name}</b></Card.Title>
                      <Card.Text>
                        <em>{item["Year of College"]}</em>
                        <p style={{padding:"0", margin:"0", marginTop:"10px", fontSize:"12px"}}>{item["Food Themed - Website Link"]}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Tilt>
              <br />
            </div>
          ))}
      </Container>
    </div>
  );
}

export default App;
