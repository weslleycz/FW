import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Projects = ({ open }) => {
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
      <Box
        id="projects"
        sx={{
          marginTop: "8%",
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
          }}
          variant="subtitle1"
          gutterBottom
        >
          Below are some of my recent projects.
        </Typography>
      </Box>
      {open ? (
        <>rfffffff</>
      ) : (
        <>
          <Carousel responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </>
      )}
    </>
  );
};
