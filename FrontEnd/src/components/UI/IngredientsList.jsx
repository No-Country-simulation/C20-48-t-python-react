import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export default function IngredientList({ ingredients }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (titulo) => () => {
    const currentIndex = checked.indexOf(titulo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(titulo);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List sx={{ borderRadius: 4, bgcolor: "background.paper" }}>
      {ingredients?.map(({ titulo, cantidad, unidadMedida }) => {
        return (
          <ListItem key={titulo} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(titulo)}
              dense
            >
              <Checkbox
                edge="start"
                checked={checked.indexOf(titulo) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <Typography>{`${titulo}, ${cantidad} ${unidadMedida}`}</Typography>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
