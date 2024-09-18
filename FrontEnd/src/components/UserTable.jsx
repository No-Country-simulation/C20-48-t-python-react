import { Avatar, TableBody, TableCell,  TableRow, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

function UserTable({ name , photo, role, github, linkedin }) {
  return (
        <TableBody>
          <TableRow sx={{borderColor: "background.default", borderRadius: 2, borderWidth: 2, borderStyle: 'solid'}}>
            <TableCell>
              <Avatar alt="Foto integrante"  src={photo}/>
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{role}</TableCell>
            <TableCell>
              <IconButton sx={{ backgroundColor: "background.default", mx: 0.5 }} aria-label="Github" href={github} target='_blank'>
                <GitHub sx={{ color: "primary.main" , }} />
              </IconButton>
              <IconButton sx={{ backgroundColor: "background.default", mx: 0.5 }} aria-label="LinkedIn" href={linkedin} target='_blank'>
                <LinkedIn sx={{ color: "primary.main" , }} />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>

  );
}

export default UserTable;
