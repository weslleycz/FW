import { TagFacesSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { theme } from "../../styles/theme/materialUi";
import { ThemeProvider } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../../repositorios/projects";
export const Projects = ({ open }) => {
  const [color, setColor] = useState("#fdfdfd");
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {open ? (
        <>
          <br></br>
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          <Box
            sx={{
              marginTop: "10%",
              marginBlockEnd: "10%",
            }}
          >
            <Typography
              id="skills"
              sx={{
                margin: "0 auto",
                textAlign: "center",
                alignItems: "center",
              }}
              variant="h4"
              gutterBottom
            >
              Projects
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                marginBlockEnd: "4%",
              }}
              variant="subtitle1"
              gutterBottom
            >
              Below are some of my recent projects.
            </Typography>
            <ThemeProvider theme={theme}>
            <Carousel responsive={responsive}>
              {projects.map((project) => {
                return (
                  <>
                    <a href={project.url}>
                      <Card
                        sx={{
            
                          height:"400px",
                          marginInline: "4%",
                          filter:
                            "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                          color: "#fdfdfd",
                          WebkitBackdropFilter: "blur(5px)",
                          background: "rgba(29, 31, 42, 0.5)",
                          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                          backdropFilter: "blur(5px)",
                          filter:
                            "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                          cursor: "pointer",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="150"
                          image={project.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                          </Typography>
                          <Stack direction="row"
                          sx={{
                            marginBlockEnd:"3%"
                          }}
                           spacing={1}>
                          {project.tags.map((tag)=>{
                            return(
                              <>
                            <Chip label={tag} color="primary" />
                              </>
                            )
                          })}
                          </Stack>
                          <Typography
                            sx={{
                              color: color,
                            }}
                            variant="body2"
                            color="text.secondary"
                          >
                            {project.description}
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </a>
                  </>
                );
              })}
            </Carousel>
            </ThemeProvider>
          </Box>
        </>
      )}
    </>
  );
};
