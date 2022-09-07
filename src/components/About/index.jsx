import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
export const About = ({ open }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      {open ? (
        <></>
      ) : (
        <>
          {matches ? (
            <Box
              sx={{
                flexGrow: 1,
                marginTop: "25%",
                marginBlockEnd: "15%",
                paddingTop: "28%",
                paddingBlockEnd: "8%",
              }}
            >
              <Grid container spacing={2} columns={16}>
                <Grid
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                  xs={6.5}
                >
                  <Avatar
                    alt="Francisco Weslley"
                    sx={{
                      margin: "0 auto",
                      height: "10rem",
                      width: "10rem",
                      border: "4px solid #12F7D4",
                    }}
                    src="https://avatars.githubusercontent.com/u/44758448?s=400&u=56a201e888897e6283a7cea454bfed2b83005fcb&v=4"
                  />
                  <Typography variant="h6" gutterBottom>
                    Francisco Weslley
                  </Typography>
                  <Stack
                    sx={{
                      justifyContent: "center",
                    }}
                    direction="row"
                    spacing={2}
                  >
                    <a href="https://mobile.twitter.com/goik69470460">
                      <TwitterIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",
                          color: "#12F7D4",
                        }}
                      ></TwitterIcon>
                    </a>
                    <a href="https://github.com/weslleycz">
                      <GitHubIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",
                          color: "#12F7D4",
                        }}
                      ></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-weslley/">
                      <LinkedInIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",
                          color: "#12F7D4",
                        }}
                      ></LinkedInIcon>
                    </a>
                  </Stack>
                </Grid>
                <Grid
                  sx={{
                    backdropFilter: "blur(20px)",
                    borderRadius: "25px",
                    textAlign: "justify-all",
                    padding: "4%",
                  }}
                  xs={8}
                >
                  <Typography variant="h5" gutterBottom>
                    <strong>About</strong>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Know a little about me.</strong>
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: "italic",
                    }}
                    variant="body1"
                    gutterBottom
                  >
                    {`Hello, I'm Francisco Weslley, I'm currently studying systems
                    analysis and development, I'm a multiplatform full stack
                    developer, I'm passionate about technology and innovation.`}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                marginTop: "10%",
                marginBlockEnd: "10%",
                paddingTop: "20%",
                paddingBlockEnd: "%",
              }}
            >
              <Box>
                <Avatar
                  alt="Francisco Weslley"
                  sx={{
                    margin: "0 auto",
                    height: "10rem",

                    width: "10rem",
                    border: "4px solid #12F7D4",
                  }}
                  src="https://avatars.githubusercontent.com/u/44758448?s=400&u=56a201e888897e6283a7cea454bfed2b83005fcb&v=4"
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                  variant="h6"
                  gutterBottom
                >
                  Francisco Weslley
                </Typography>
                <Stack
                    sx={{
                      justifyContent: "center",
                    }}
                    direction="row"
                    spacing={2}
                  >
                    <a href="https://mobile.twitter.com/goik69470460">
                    <TwitterIcon
                      sx={{
                        fontSize: "25px",
                        cursor: "pointer",
                        color: "#12F7D4",
                      }}
                    ></TwitterIcon>
                    </a>
                    <a href="https://github.com/weslleycz">
                    <GitHubIcon
                      sx={{
                        fontSize: "25px",
                        cursor: "pointer",
                        color: "#12F7D4",
                      }}
                    ></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/francisco-weslley/">
                    <LinkedInIcon
                      sx={{
                        fontSize: "25px",
                        cursor: "pointer",
                        color: "#12F7D4",
                      }}
                    ></LinkedInIcon>
                    </a>
                  </Stack>
                <Typography
                  sx={{
                    textAlign: "center",
                    marginBlockEnd: "1em",
                    marginTop: "1em",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  <strong>Know a little about me.</strong>
                </Typography>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    textAlign: "justify",
                    margin: "0 auto",

                    width: "70%",
                  }}
                  variant="body1"
                  gutterBottom
                >
                  {`Hello, I'm Francisco Weslley, I'm currently studying systems
                    analysis and development, I'm a multiplatform full stack
                    developer, I'm passionate about technology and innovation.`}
                </Typography>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};
