import { mergeTypes } from "merge-graphql-schemas";

import Giver from "./Giver/";

const typeDefs = [Giver];

export default mergeTypes(typeDefs, { all: true });
