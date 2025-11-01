import apolloClient from "../apollo-client";
import { gql } from "@apollo/client";

export async function getEvents(limit = 10) {
	// Try different query variations to handle different plugin setups
	const queries = [
		// Standard WP GraphQL for The Events Calendar (generic)
		gql`
			query GetEvents {
				events(first: ${limit}) {
					nodes {
						id
						title
						content
						startDate
						endDate
						allDay
						uri
						featuredImage {
							node {
								sourceUrl
								altText
							}
						}
						venue {
							title
							address
							city
							state
							zip
							country
						}
					}
				}
			}
		`,
		// Fallback without venue/organizer
		gql`
			query GetEvents {
				events(first: ${limit}) {
					nodes {
						id
						title
						content
						startDate
						endDate
						allDay
						uri
						featuredImage {
							node {
								sourceUrl
								altText
							}
						}
					}
				}
			}
		`,
		// Minimal fallback
		gql`
			query GetEvents {
				events(first: ${limit}) {
					nodes {
						id
						title
						content
						startDate
						endDate
					}
				}
			}
		`,
	];

	for (const query of queries) {
		try {
			const { data } = await apolloClient.query({
				query,
				fetchPolicy: "no-cache",
			});

			if (data?.events?.nodes) {
				return data.events.nodes;
			}
		} catch (error) {
			console.error("Events query attempt failed:", error.message);
			// Continue to next query
		}
	}

	// If all queries fail, return empty array
	console.warn("All event queries failed. Returning empty array.");
	return [];
}

export async function getEventBySlug(slug) {
	// Try queries that many WP GraphQL setups expose
	const queries = [
		// If the schema exposes a 'eventBy' or 'event' query
		gql`
			query GetEventBySlug($slug: ID!) {
				event(id: $slug, idType: SLUG) {
					id
					title
					content
					startDate
					endDate
					uri
					slug
					featuredImage {
						node {
							sourceUrl
							altText
						}
					}
					venue {
						title
						address
						city
						state
						zip
						country
					}
				}
			}
		`,
		// Some setups expose a 'events' query with filtering
		gql`
			query GetEventBySlug($slug: String!) {
				events(where: { slug: $slug }) {
					nodes {
						id
						title
						content
						startDate
						endDate
						uri
						slug
						featuredImage {
							node {
								sourceUrl
								altText
							}
						}
						venue {
							title
							address
							city
							state
							zip
							country
						}
					}
				}
			}
		`,
	];

	for (const query of queries) {
		try {
			const { data } = await apolloClient.query({
				query,
				variables: { slug },
				fetchPolicy: "no-cache",
			});

			// event (single)
			if (data?.event) return data.event;

			// events.nodes
			if (data?.events?.nodes && data.events.nodes.length > 0)
				return data.events.nodes[0];
		} catch (err) {
			console.warn("getEventBySlug query attempt failed:", err.message);
		}
	}

	return null;
}

export async function getEventById(id) {
	const queries = [
		gql`
			query GetEventById($id: ID!) {
				event(id: $id, idType: DATABASE_ID) {
					id
					title
					content
					startDate
					endDate
					uri
					slug
					featuredImage {
						node {
							sourceUrl
							altText
						}
					}
					venue {
						title
						address
						city
						state
						zip
						country
					}
				}
			}
		`,
	];

	for (const query of queries) {
		try {
			const { data } = await apolloClient.query({
				query,
				variables: { id },
				fetchPolicy: "no-cache",
			});

			if (data?.event) return data.event;
		} catch (err) {
			console.warn("getEventById query attempt failed:", err.message);
		}
	}

	return null;
}
