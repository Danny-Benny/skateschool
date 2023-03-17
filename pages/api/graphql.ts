import { createYoga, createSchema } from "graphql-yoga";
import { gql } from "graphql-tag";
import axios from "axios";

const typeDefs = gql`
  type Query {
    users: [User!]!
    card: [Card]
    pages: [Pages]
    settings: [Settings]
  }

  type Mutation {
    addUser(name: String!): User
  }

  type User {
    name: String
  }

  type Card {
    id: String!
    title: String!
    description: String
    trick_img_alt: String
  }

  type Pages {
    pageName: String
  }

  type Settings {
    pageSettings: String
  }
`;

let users = [];
const resolvers = {
  Query: {
    users: () => {
      return [{ name: "Nextjs" }];
    },
    card: () => {
      return [
        {
          id: "Ux1gvUdFzgw",
          title: "Ollie",
          description: "Prvni trik co se naucime",
          trick_img_alt: "ollie",
        },
      ];
    },
    pages: () => {
      return [
        { pageName: "Přehled triků" },
        { pageName: "Postup" },
        { pageName: "Blog" },
      ];
    },
    settings: () => {
      return [
        { pageSettings: "Profil" },
        { pageSettings: "Nastavení" },
        { pageSettings: "Odhlásit se" },
      ];
    },
  },
  Mutation: {
    addUser: (_: any, { name }: { name: string }) => {
      const newUser = { name };
      users.push(newUser);
      return newUser;
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: "/api/graphql",
});
