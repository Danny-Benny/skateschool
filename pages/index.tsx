import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import TrickCard from "@/components/card";

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
            <Grid item xs={3}>
              <TrickCard
                id="Ux1gvUdFzgw"
                title="Ollie"
                description="Prvni trik co se naucime"
                trick_img_alt="ollie"
              />
            </Grid>
            <Grid item xs={3}>
              <TrickCard
                id="IK55jb8ebtw"
                title="Pop shove it"
                description="Druhy trik co se naucime"
                trick_img_alt="popshoveit"
              />
            </Grid>
            <Grid item xs={3}>
              <TrickCard
                id="Yv_NXSEx_YY"
                title="Kickflip"
                description="Treti trik co se naucime"
                trick_img_alt="kickflip"
              />
            </Grid>
            <Grid item xs={3}>
              <TrickCard
                id="dQw4w9WgXcQ"
                title="title"
                description="description"
                trick_img_alt="trick_img_alt"
              />
            </Grid>
            <Grid item xs={3}>
              <TrickCard
                id="dQw4w9WgXcQ"
                title="title"
                description="description"
                trick_img_alt="trick_img_alt"
              />
            </Grid>
            <Grid item xs={3}>
              <TrickCard
                id="dQw4w9WgXcQ"
                title="title"
                description="description"
                trick_img_alt="trick_img_alt"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
