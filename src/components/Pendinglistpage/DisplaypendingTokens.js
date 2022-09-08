import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";
import { API } from "../../App";


export function DisplaypendingTokens({ name, notes, date, time, username, id, img }) {
  return (
    <div>
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
            {/* CardMedia is used to display the image */}
            <CardMedia component="img" height="194" image={img} alt={name} />
            {/* CardContent is used to display the Content */}
            <CardContent>
              <Typography variant="h6" component="div">
                UserId:{username}
                <br />
                Variant: {name}
                <br />
                Description: {notes}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Ordered at {date} at
                {time}
                <br />
                Wait till admin accept the token.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="contained"
                sx={{ marginBottom: "10px" }}
                endIcon={<RestaurantIcon />}
                onClick={() => {
                  fetch(`${API}/cancelToken/${id}`, {
                    method: "DELETE",
                  })
                    .then(() => window.alert("Order Cancelled"))
                    .then(() => {
                      window.location.reload();
                    });
                }}
              >
                Cancel Token
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
