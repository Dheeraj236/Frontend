import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { API } from "../../../App";


export function Showfoods({ name, Notes, id, img }) {
  const navigate = useNavigate();


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
              Description: {Notes}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              This food is avaliable for our Employes
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <span className="editicon">
              <IconButton
                aria-label="delete"
                sx={{ marginTop: "0" }}
                onClick={() => {
                  navigate(`/Foods/edit/${id}`);
                }}
                color="secondary"
                size="large"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            </span>
            <span className="deleteicon">
              <IconButton
                aria-label="delete"
                sx={{ marginTop: "0" }}
                color="error"
                onClick={() => fetch(`${API}/deletefood/${id}`, { method: "DELETE" })
                  .then((res) => console.log("deleted successfully"))
                  .then(() => window.location.reload())}
                size="large"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </span>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
