import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { list } from "../../repositorios/list";
import { useState } from "react";
export const Skills = ({ open, setOpen }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [titele, setTitele] = useState(0);
  const [imagem, setImagem] = useState(0);
  const [description, setDescription] = useState(0);

  const getCard = (index) => {
    setTitele(index.title);
    setImagem(index.image);
    setDescription(index.description);
    handleToggle();
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "#fdfdfd",
          background:
            "linear-gradient(108.46deg, rgba(241, 156, 156, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
          backdropFilter: "blur(20px)",
        }}
        open={open}
        onClick={handleClose}
      >
        <Card
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            color: "#fdfdfd",
            background: "rgba(70, 70, 70, 0.55)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(9.5px)",
            width: "50%",
            WebkitBackdropFilter: "blur(9.5px)",
            border: "1px solid rgba(70, 70, 70, 0.4)",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <img
                src={imagem}
                width="200"
                height="200"
                style={{
                  margin: "25%",
                }}
                alt={titele}
              />
            </Grid>
            <Grid xs={6}>
              <Typography
                sx={{
                  marginTop: "10%",
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
              >
                <strong>{titele}</strong>
              </Typography>
              <Typography
                sx={{
                  margin: "10%",
                }}
                variant="subtitle1"
                gutterBottom
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Backdrop>
      {matches ? (
        <>
          {open ? (
            ""
          ) : (
            <>
              <Box
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
                  Skills
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Below is a brief list of my main tools and languages.
                </Typography>
              </Box>
              <div>
                <Stack
                  sx={{
                    marginBlockEnd: "1%",
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  direction="row"
                >
                  <Card
                    onClick={() => getCard(list[0])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      alignItems: "center",
                      ":hover": {
                        background: "#eef5f8",
                      },
                      margin: "1%",
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"javascript"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[1])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"typescript"}
                    />
                  </Card>
                  <Card
                    variant="outlined"
                    onClick={() => getCard(list[2])}
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"bootstrap"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[3])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"react"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[4])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"nextjs"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[5])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"sass"}
                    />
                  </Card>
                </Stack>
                <Stack
                  sx={{
                    marginBlockEnd: "1%",
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  direction="row"
                >
                  <Card
                    onClick={() => getCard(list[6])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"postgresql"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[7])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"mongodb"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[8])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"redis"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[9])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"firebase"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[10])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"prisma"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[11])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"docker"}
                    />
                  </Card>
                </Stack>
                <Stack
                  sx={{
                    marginBlockEnd: "1%",
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  direction="row"
                >
                  <Card
                    onClick={() => getCard(list[12])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"nodejs"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[13])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"nestjs"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[14])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"graphql"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[15])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"expo"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[16])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"ionic"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[17])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"electron"}
                    />
                  </Card>
                </Stack>
                <Stack
                  sx={{
                    marginBlockEnd: "1%",
                    margin: "0 auto",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  direction="row"
                >
                  <Card
                    onClick={() => getCard(list[18])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"figma"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[19])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"github"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[20])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://findicons.com/files/icons/2804/plex/512/inkscape.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"inkscape"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[21])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      cursor: "pointer",
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"expo"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[22])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_200,h_200/https://api.charmhub.io/api/v1/media/download/charm_cMu7M9K6a65FsKZvrLZOZwyQradwbs7E_icon_5cef79c2d18f67464f39c8f2cf2d7ebb815b0071f04d3ffbb94f49fddd3ab666.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"portainer"}
                    />
                  </Card>
                  <Card
                    onClick={() => getCard(list[23])}
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      cursor: "pointer",
                      minHeight: 100,
                      background: "rgba(29, 31, 42, 0.5)",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1%",
                      ":hover": {
                        background: "#eef5f8",
                      },
                    }}
                  >
                    <img
                      src={`https://www.freepnglogos.com/uploads/linux-png/linux-tux-logo-png-transparent-svg-vector-bie-supply-14.png`}
                      width="80"
                      height="80"
                      style={{
                        marginTop: "10%",
                      }}
                      alt={"linux"}
                    />
                  </Card>
                </Stack>
              </div>
            </>
          )}
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
};
