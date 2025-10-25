import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getSermons() {
	const baseFields = `id title slug content date`;
	// request both possible speaker field names (speaker and sermon_speaker) plus youtube_id
	const acfSelection = `acfSermonFields { sermon_speaker speaker youtube_id }`;

	const queryWithAcf = gql`
		query AllSermonsWithAcf {
			sermons(first: 10) {
				nodes {
					${baseFields}
					${acfSelection}
				}
			}
		}
	`;

	try {
		const { data } = await client.query({ query: queryWithAcf });
		return data?.sermons?.nodes || [];
	} catch (err) {
		// fallback without ACF fields
		const fallbackQuery = gql`
			query AllSermons {
				sermons(first: 10) {
					nodes {
						${baseFields}
					}
				}
			}
		`;
		const { data } = await client.query({ query: fallbackQuery });
		return data?.sermons?.nodes || [];
	}
}
