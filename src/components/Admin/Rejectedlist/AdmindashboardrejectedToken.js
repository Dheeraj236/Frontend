import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { API } from "../../../App";

export function AdmindashboardrejectedToken() {
  const userName = localStorage.getItem("username");

  const [data, setdata] = React.useState([]);
  const [re, setre] = React.useState([]);

  useEffect(() => {
    fetch(`${API}/rejectedTokens`)
      .then((data) => data.json())
      .then((data) => {
        setdata(data);
      })
      .then(() => setre("done"));
  }, [re]);
  console.log(data);

  return (
    <div>
      <div className="welcomeAdmin">
        <h3>
          welcome <span className="username">{userName}</span>.
        </h3>
        RejectedToken will display here
      </div>
      <div></div>
      {data.map((data) => {
        return (
          <div>
            <div className="card">
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "0",
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.img}
                  alt={data.foodName} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    UserId:{data.username}
                    <br />
                    Variant: {data.foodName}
                    <br />
                    Description: {data.description}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Ordered at {data.Date} at
                    {data.Time}
                    <br />
                    This Token has been Rejected.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    variant="contained"
                    sx={{ marginBottom: "10px" }}
                    endIcon={<RestaurantIcon />}
                    onClick={() => {
                      fetch(`${API}/deleterejectedlist/${data._id}`, {
                        method: "DELETE",
                      })
                        .then(() => window.alert("Data deleted successfully"))
                        .then(() => {
                          window.location.reload();
                        });
                    }}
                  >
                    delete Token
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
