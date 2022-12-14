import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./src/schema/schema.js";
import resolvers from "./src/resolvers/resolvers.js";
import {
  connectToDatabase,
  getClassModel,
  getStudentModel,
} from "./src/config/database.js";

connectToDatabase().then(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: () => ({
      studentModel: getStudentModel(),
      classModel: getClassModel(),
    }),
  });

  console.log(`🚀  Server ready at: ${url}`);
});
