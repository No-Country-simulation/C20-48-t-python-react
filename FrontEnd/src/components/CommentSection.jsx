import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Container } from "@mui/material";
import { Typography, Stack, Avatar } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useUser } from "../Context/UserContext";
import cucumber from "../assets/profile-icons/cucumber-avatar.svg";
import lemon from "../assets/profile-icons/lemon-avatar.svg";
import pepper from "../assets/profile-icons/pepper-avatar.svg";
import radish from "../assets/profile-icons/radish-avatar.svg";

const avatars = {
  lemon: lemon,
  cucumber: cucumber,
  pepper: pepper,
  radish: radish,
};
const hardcodedComments = [
  {
    id: 0,
    usuarioemail: "Jane Doe",
    comentario: "Wow! que buena receta! La recomiendo! 😍",
  },
  {
    id: 1,
    usuarioemail: "Natalia Natalia",
    comentario: "La voy a probar el fin de semana!",
  },
  {
    id: 2,
    usuarioemail: "John Doe",
    comentario: "Esta es una receta muy buena, no tuve que hacer nungun ajuste",
  },
];

export default function CommentSection({ receta }) {
  const { userInfo, isLogin } = useUser();
  const [expanded, setExpanded] = useState({ id: -1 });
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(
    receta.comentarios.length > 0 ? receta.comentarios : hardcodedComments,
  );
  const [comment, setComment] = useState({
    usuarioemail: userInfo?.username || "",
    comentario: "",
  });
  async function onSubmit(event) {
    event.preventDefault();
    if (comment.comentario === "") return;

    try {
      const response = await fetch(
        `https://recetapp-ggh9.onrender.com/recetas/${receta.id}/comentario`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            comentario: comment.comentario,
          }),
        },
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    setComments([...comments, comment]);
    setComment({
      comentario: "",
    });
    setShowComments(true);
  }

  function expandComent(id) {
    if (expanded.id === id) {
      setExpanded({ id: -1 });
      return;
    }
    setExpanded({ id: id });
  }

  return (
    <Container
      disableGutters
      sx={{
        paddingTop: 2,
        paddingBottom: 4,
        borderRadius: 4,
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        sx={{ padding: 2, paddingInline: 4, flexDirection: "row", gap: 2 }}
      >
        <Typography variant="h5" gutterBottom>
          Comentarios
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ borderRadius: 10 }}
          onClick={() => setShowComments(!showComments)}
        >
          Mostrar ({comments?.length})
        </Button>
      </Stack>
      <form onSubmit={(event) => onSubmit(event)}>
        <Stack
          sx={{
            paddingInline: 4,
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            multiline
            rows={2}
            disabled={!isLogin}
            label={`Deja tu comentario`}
            value={comment?.comentario}
            onChange={(event) =>
              setComment({
                ...comment,
                comentario: event.target.value,
              })
            }
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isLogin}
          >
            Enviar
          </Button>
        </Stack>
      </form>
      <Collapse in={showComments} sx={{ padding: 2 }}>
        {comments?.length > 0 ? (
          comments.slice().map((comment) => (
            <Container
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
              }}
              key={comment.id}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                  paddingBottom: 2,
                }}
              >
                <Avatar
                  alt="Cindy Baker"
                  src={
                    receta?.usuarioEmail === comment.usuarioemail &&
                    userInfo?.avatar
                      ? avatars[userInfo.avatar]
                      : [lemon, cucumber, pepper, radish][
                          Math.floor(Math.random() * 4)
                        ]
                  }
                  sx={{
                    width: 35,
                    height: 35,
                    border: "1px solid ",
                    backgroundColor: "secondary.light",
                    borderColor: "secondary.main",
                  }}
                >
                  {comment.usuarioemail.charAt(0)}
                </Avatar>
                <Typography
                  variant="boydy2"
                  fontWeight="bold"
                  sx={{
                    backgroundColor:
                      userInfo?.username === comment.usuarioemail &&
                      "secondary.main",
                    paddingInline: 1,
                    borderRadius: 10,
                  }}
                >
                  {comment.usuarioemail.split("@")[0]}
                </Typography>
                {receta?.usuarioEmail === comment.usuarioemail && (
                  <RestaurantIcon
                    sx={{
                      backgroundColor: "info.main",
                      borderRadius: 10,
                      padding: "5px",
                    }}
                  />
                )}
                <Typography variant="body2" color="text.disabled">
                  {new Date(comment?.fechaComentario).toLocaleDateString()}
                </Typography>
              </Stack>
              <Collapse
                in={expanded.id === comment.id}
                timeout="auto"
                collapsedSize={40}
              >
                <Typography
                  sx={{
                    opacity: 0.7,
                    whiteSpace: "pre-line",
                  }}
                >
                  {comment.comentario}
                </Typography>
              </Collapse>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  p: 0,
                  marginTop: 1,
                  lineHeight: 1,
                  // maxWidth: "17px",
                  alignSelf: "flex-end",
                }}
                onClick={() => expandComent(comment.id)}
              >
                &#x22EF;
              </Button>
              <Divider sx={{ marginTop: 2 }} />
            </Container>
          ))
        ) : (
          <Typography variant="h6" gutterBottom fontWeight="bold" p={2} m={0}>
            No hay comentarios
          </Typography>
        )}
      </Collapse>
    </Container>
  );
}
