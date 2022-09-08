import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";
import { API } from "../../../App";


export function AdmindashboardacceptedTokenlist({
  name, notes, date, time, username, img, orderid, id,
}) {
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
              UserId:{username}
              <br />
              TokenId:{orderid}
              <br />
              Variant: {name}
              <br />
              Description: {notes}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Ordered at {date} on
              {time}
              <br />
              This Token has been generated Successfully.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              variant="contained"
              sx={{ marginBottom: "10px" }}
              endIcon={<RestaurantIcon />}
              onClick={() => {
                fetch(`${API}/deleteacceptedlist/${id}`, {
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
}
