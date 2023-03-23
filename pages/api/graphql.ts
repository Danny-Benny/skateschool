import { createYoga, createSchema } from "graphql-yoga";
import { gql } from "graphql-tag";
import axios from "axios";
import { verifyToken } from "@/server/verifyToken";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

type Context = {
  user?: DecodedIdToken | undefined;
};
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
    card: (context: Context) => {
      return [
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
  context: async (context) => {
    const auth = context.request.headers.get("authorization");
    console.log(auth);
    return {
      user: auth ? await verifyToken(auth) : undefined,
    } as Context;
  },
});
