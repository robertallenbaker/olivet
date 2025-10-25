import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const link = new HttpLink({
	uri: "https://tan-scorpion-408183.hostingersite.com/graphql",
	fetch,
});

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

export default client;
