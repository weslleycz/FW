import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
export const Footer = ({ open }) => {
  return (
    <>
    {
      open?(""):(
        <Container
        maxWidth="md"
        sx={{ marginTop: 2, marginBottom: "auto", padding: "3%" }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
            }}
            ariant="overline"
            display="block"
            gutterBottom
          >
            © {new Date().getFullYear()} Francisco Weslley Silva de Souza
          </Typography>
        </Box>
      </Container>
      )
    }
    </>
  );
};
