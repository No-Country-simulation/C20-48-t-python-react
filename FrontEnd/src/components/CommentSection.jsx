import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { useState } from "react";
const hardcodedComments = [
  {
    id: 0,
    id_user: 1,
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amettempor eros aliquam conse ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.",
  },
  {
    id: 1,
    id_user: 2,
    name: "Jane Doe",
    comment:
      "Ls ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.",
  },
  {
    id: 2,
    id_user: 3,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export default function CommentSection() {
  const [expanded, setExpanded] = useState({ id: -1 });
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(hardcodedComments);
  const [comment, setComment] = useState({
    id: comments.length + 1,
    id_user: comments.length + 1,
    name: "carlitos",
    comment: "",
  });

  function onSubmit(event) {
    event.preventDefault();
    if (comment.comment === "") return;

    setComments([...comments, comment]);
    setComment({
      id_user: comments.length + 1,
      id: comments.length + 1,
      name: "carlitos",
      comment: "",
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
        disableGutters
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
          Mostrar ({comments.length})
        </Button>
      </Stack>
      <form onSubmit={(event) => onSubmit(event)}>
        <Stack
          disableGutters
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
            label={`Deja tu comentario`}
            value={comment.comment}
            onChange={(event) =>
              setComment({
                ...comment,
                comment: event.target.value,
              })
            }
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Stack>
      </form>
      <Collapse in={showComments} sx={{ padding: 2 }}>
        {comments.length > 0 ? (
          comments
            .slice()
            .reverse()
            .map((comment) => (
              <Container
                sx={{ padding: 2, display: "flex", flexDirection: "column" }}
                key={comment.id}
              >
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  &#9679; {comment.name}
                </Typography>
                <Collapse
                  in={expanded.id === comment.id}
                  timeout="auto"
                  collapsedSize={50}
                >
                  <Typography
                    sx={{
                      opacity: 0.7,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {comment.comment}
                  </Typography>
                </Collapse>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 10,
                    p: 0,
                    marginTop: 1,
                    lineHeight: 1,
                    maxWidth: "17px",
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
