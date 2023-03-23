import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { Box, Container, Grid } from "@mui/material";
import TrickCard from "@/components/card";
import { useAuthContext } from "@/components/authContextProvider";

const GET_CARDS = gql`
  query {
    card {
      id
      title
      description
      trick_img_alt
    }
  }
`;

const Home: React.FC = () => {
  const { data } = useQuery(GET_CARDS);

  return (
    <Container maxWidth="xl">
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ paddingTop: "10px" }}
        >
          {data?.card.map((trickCard: any) => (
            <Grid item xs={3} key={trickCard.id}>
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
  );
};

export default Home;
