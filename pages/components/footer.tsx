import { AppBar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function GuestFooter() {
  return (
    <AppBar
      sx={{
        marginTop: "auto",
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "10%",
      }}
      component="footer"
      position="static"
      color="primary"
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2023. Limited
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
