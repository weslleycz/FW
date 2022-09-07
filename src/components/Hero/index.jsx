import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Astronauta from "../../ assets/Astronauta.svg";

export const Hero = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      {matches ? (
        <Box id="home" sx={{ width: "100%", marginTop: "2%", alignContent: "center" }}>
          <Grid
            container
            sx={{
              margin: "0 auto",
              alignItems: "center"
            }}
            rowSpacing={1}
          >
            <Grid xs={4}>
              <Box
                sx={{
                  width: "100%",
                  justifyItems: "center",
                  display: "flow-root",
                  alignContent: "center",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  <strong>👋🏻 Hey, welcome.</strong>
                  <Typography variant="h2" gutterBottom>
                    <strong>Francisco Weslley</strong>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#12F7D4" }}
                    gutterBottom
                  >
                    Full Stack Developer 🧪
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    I am a young developer looking to increase my knowledge.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid xs={8}>
              <Box
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  className="animate__animated animate__pulse animate__infinite 
                  animate__slower
                  animate__delay-1s"
                  src={Astronauta}
                  alt="Astronauta com logos de linguagens de programação orbitando."
                  height={500}
                ></Image>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box id="home" sx={{ width: "100%" }}>
          <Stack
            sx={{
              margin: "0 auto",
              textAlign: "center",
              alignItems: "center",
            }}
            spacing={2}
          >
            <Typography variant="body1" gutterBottom>
              <strong>👋🏻 Hey, welcome.</strong>
            </Typography>
            <Typography variant="h2" gutterBottom>
              <strong>Francisco Weslley</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: "#12F7D4" }} gutterBottom>
              Full Stack Developer 🧪
            </Typography>
            <Typography
              sx={{
                width: "80%",
                marginBlockEnd:"10%"
              }}
              variant="subtitle1"
              gutterBottom
            >
              I am a young developer looking to increase my knowledge.
            </Typography>
          </Stack>
          <Image
            style={{
              margin:"10px"
            }}
            src={Astronauta}
            alt="Astronauta com logos de linguagens de programação orbitando."
            height={500}
          ></Image>
        </Box>
      )}
    </>
  );
};
