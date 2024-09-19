import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export default function IngredientList({ ingredients }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (nombre) => () => {
    const currentIndex = checked.indexOf(nombre);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(nombre);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List sx={{ borderRadius: 4, bgcolor: "background.paper" }}>
      {ingredients?.map(({ nombre, cantidad, unidadMedida }) => {
        return (
          <ListItem key={nombre} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(nombre)}
              dense
            >
              <Checkbox
                edge="start"
                checked={checked.indexOf(nombre) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <Typography>{`${nombre}, ${cantidad} ${unidadMedida}`}</Typography>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
