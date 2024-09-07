import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ color }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: color,
        borderRadius: 4,
        border: `1px solid `,
        borderColor: "primary.main",
        paddingBottom: 1,
        transition: "all 0.2s ease-in-out",
        ":hover": {
          boxShadow: "4px 4px 0px 4px  #1E1E1E",
          scale: 1.02,
        },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://newmansown.com/wp-content/uploads/2022/03/Homemade-lasagna.png"
        title="Food"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "text.primary" }}
        >
          Una receta
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          Creada por Lionel Messi
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" sx={{ color: "white" }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
