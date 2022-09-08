import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";
import { API } from "../../App";


export function Makeorder({ name, notes, id, img }) {
  const navigate = React.useState();

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
          <CardMedia component="img" height="194" image={img} alt={name} />
          <CardContent>
            <Typography variant="h6" component="div">
              Variant: {name}
              <br />
              Description: {notes}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              This food is avaliable. Order for lunch
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              sx={{ marginBottom: "10px" }}
              endIcon={<RestaurantIcon />}
              onClick={() => {
                fetch(`${API}/request/${id}`, {
                  method: "POST",
                  body: JSON.stringify({
                    userName: localStorage.getItem("username"),
                    foodName: name,
                    notes: notes,
                    img: img,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                  credentials: "include",
                })
                  .then(() => window.alert("Order placed"))
                  .then(() => {
                    navigate("/Dashboard");
                  });
              }}
            >
              Order Now
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
