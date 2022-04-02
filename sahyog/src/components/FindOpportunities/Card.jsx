import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import data from "./data";


export default function CardSnippet() {
  const [arr, setarray] = useState(data);
 
  return (
    <div style={{margin: "2.5rem"}}>
    
      <Grid container spacing={5}>
        {arr.map((item) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card className="job-card txt" variant="outlined" style={{backgroundColor: "#8FA1DE"}}>
                  <CardContent>
                    <Typography
                      className="name"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      <div className="row">
                        <div className="col-9">
                          {item.jobName} -{" "}
                          <span className="jobtype">{item.type}</span>
                        </div>
                        
                      </div>
                    </Typography>
                    <Typography>
                      <div className="d-flex title">
                        {item.title}
                        &nbsp;&nbsp;&nbsp;
                        
                      </div>
                    </Typography>

                    <div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <LocationOnOutlinedIcon /> {item.location}
                        </div>
                      </div>
                      <div
                        className="info-small"
                        style={{ display: "inline-block" }}
                      >
                        <div className="tag" style={{ display: "inline-flex" }}>
                          <PhoneInTalkOutlinedIcon />
                          {item.PhoneNo}
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-center info mt-5"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <EventAvailableOutlinedIcon /> Duration
                      </div>
                      <div className="value">{item.Duration}</div>
                    </div>
                    <div
                      className="info text-center"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <PaidOutlinedIcon />
                        Stipend
                      </div>
                      <div className="value">{item.Salary}</div>
                    </div>
                    <div
                      className="info text-center"
                      style={{ display: "inline-block" }}
                    >
                      <div className="tag" style={{ display: "inline-flex" }}>
                        <AccessTimeRoundedIcon />
                        Apply by
                      </div>
                      <div className="value">{item.Deadline}</div>
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
