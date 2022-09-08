import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Typography from "@mui/material/Typography";
import { API } from "../../../App";


export function AdminpendingToken({ name, notes, date, time, username, id, img }) {
  const Randomid = Math.floor(Math.random() * (2000 - 100 + 1)) + 2000;

  return (
    <div>
      <div>
        <div className="card">
          <Card sx={{}}>
            <CardMedia component="img" height="194" image={img} alt={name} />
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
                Tokens are waiting for you
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <span className="reject_btn">
                <Button
                  variant="contained"
                  onClick={async () => {
                    await fetch(`${API}/reject/${id}`, {
                      method: "POST",
                      body: JSON.stringify({
                        food: name,
                        notes: notes,
                        img: img,
                        Date: date,
                        Time: time,
                        username: username,
                      }),
                      headers: {
                        "Content-type": "application/json",
                      },
                      credentials: "include",
                    }).then(() => {
                      window.location.reload();
                    });
                  }}
                >
                  REJECT
                </Button>
              </span>

              <span className="accept_btn">
                <Button
                  variant="contained"
                  onClick={async () => {
                    await fetch(`${API}/accept/${id}`, {
                      method: "POST",
                      body: JSON.stringify({
                        food: name,
                        notes: notes,
                        Date: date,
                        img: img,
                        Time: time,
                        username: username,
                        OrderId: Randomid,
                      }),
                      headers: {
                        "Content-type": "application/json",
                      },
                      credentials: "include",
                    }).then(() => {
                      window.location.reload();
                    });
                  }}
                >
                  ACCEPT
                </Button>
              </span>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
