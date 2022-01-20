import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://emiliodiaz.ca/">
        emiliodiaz.ca
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function Album() {
  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Emilio Diaz
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I&#8217;m a cross-disciplinary Frontend Developer focusing
              primarily on React applications and I&#8217;m also able to design
              amazing looking UIs, and deploy accessible and highly performant
              code to provide solutions to various areas of the overall user
              experience.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I have worked in close collaboration with product owners to
              understand their vision for the product and to define and refine
              user stories to get applications and features from a basic idea to
              production code.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                color="inherit"
                href="linkedin.com/in/emilio-diaz-53b06716"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </Link>
            </Box>
            <Typography align="center" color="text.secondary" paragraph>
              Let&#8217;s conect
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Copyright />
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}
