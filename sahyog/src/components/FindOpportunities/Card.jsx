import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./Card.css"
import {db} from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
export default function CardSnippet() {
  const [arr, setarray] = useState([]);
  const colRef=collection(db,'Opportunities');
  useEffect(()=>{
  
    getDocs(colRef)
                  .then((snapshot)=>{
                    snapshot.docs.forEach((doc)=>{
                      
                      setarray(oldArray => [...oldArray,{...doc.data(),id: doc.id} ]);
                    })
                  
                  })
                  .catch(err=>{
                    console.log(err.message);
                  })
                  
  },[])
  return (
    <div style={{ margin: "2.5rem" }}>
      <Grid container spacing={5}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card
                  className="opp-card txt"
                  variant="outlined"
                   style={{backgroundColor: "#6bdcd5" }}
                >
                  <CardContent>
                    <Typography
                      className="name"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      <div className="row">
                        <div className="col-9">{item.organisationName}</div>
                      </div>
                    </Typography>

                    <div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <LocationOnOutlinedIcon /> {item.location} &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                      </div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <PhoneInTalkOutlinedIcon />
                          {item.phoneNo}
                        </div>
                      </div>
                    </div>
                   
                    <Typography>
                      <div >
                        {item.des}                        
                      </div>
                    </Typography>
                    
                    <div
                      className="info text-center"
                      style={{ display: "inline-flex" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <AccessTimeRoundedIcon />
                        Deadline: &nbsp;
                      </div>
                      <div className="value">{item.deadline}</div>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
