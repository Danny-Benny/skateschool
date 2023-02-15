import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import TrickCard from "@/components/card";

const trickCards = [
  {
    id: "Ux1gvUdFzgw",
    title: "Ollie",
    description: "Prvni trik co se naucime",
    trick_img_alt: "ollie",
  },
  {
    id: "IK55jb8ebtw",
    title: "Pop shove it",
    description: "Druhy trik co se naucime",
    trick_img_alt: "popshoveit",
  },
  {
    id: "Yv_NXSEx_YY",
    title: "Kickflip",
    description: "Treti trik co se naucime",
    trick_img_alt: "kickflip",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ paddingTop: "10px" }}
          >
            {trickCards.map((trickCard, index) => (
              <Grid item xs={3} key={index}>
                <TrickCard
                  id={trickCard.id}
                  title={trickCard.title}
                  description={trickCard.description}
                  trick_img_alt={trickCard.trick_img_alt}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
