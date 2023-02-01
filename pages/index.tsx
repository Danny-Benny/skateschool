import { Container, Typography } from "@mui/material";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h3">Content</Typography>
      </Container>
    </>
  );
}
