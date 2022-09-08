import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";


export function DisplayavaliableTokens({
  name, notes, date, time, username, img, orderid,
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
              UserName:{username}
              <br />
              TOKEN ID: {orderid}
              <br />
              Variant: {name}
              <br />
              Description: {notes}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Date: {date}
              <br />
              Time:{time}
              <br />
              Token has been generated
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </div>
    </div>
  );
}
