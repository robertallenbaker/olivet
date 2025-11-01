import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getSermons() {
	const baseFields = `id title slug content date`;

	// We will try several possible ACF container names and field variants
	const containers = [
		// Based on user's GraphQL type name hint (sermons)
		"sermonsFields",
		"sermons_Fields",
		// User-previously-specified
		"Sermons_Fields",
		// Common alternatives
		"acfSermonFields",
		"sermonFields",
		"acf",
		"sermon",
		"sermonMeta",
		"sermons",
	];
	const speakerFields = ["sermonSpeaker", "sermon_speaker", "speaker"];
	const youtubeFields = ["youtube_id", "youtubeId"];

	// Try combinations until one succeeds; then normalize results to acfSermonFields
	for (const container of containers) {
		for (const sField of speakerFields) {
			for (const yField of youtubeFields) {
				const selection = `${container} { ${sField} ${yField} }`;
				const query = gql`
					query AllSermons_Compat {
						sermons(first: 10) {
							nodes {
								${baseFields}
								${selection}
							}
						}
					}
				`;
				try {
					const { data } = await client.query({ query });
					const nodes = data?.sermons?.nodes || [];
					// Normalize to acfSermonFields for the UI
					return nodes.map((n) => {
						const acf = n?.[container] || {};
						const resolvedSpeaker =
							acf[sField] ??
							acf.sermonSpeaker ??
							acf.sermon_speaker ??
							acf.speaker ??
							null;
						const resolvedYoutube =
							acf[yField] ??
							acf.youtubeId ??
							acf.youtube_id ??
							null;
						const normalized = {
							...n,
							acfSermonFields: {
								sermonSpeaker: resolvedSpeaker,
								sermon_speaker: resolvedSpeaker,
								speaker: resolvedSpeaker,
								youtubeId: resolvedYoutube,
								youtube_id: resolvedYoutube,
							},
						};
						// Hide the raw container to avoid confusion
						try {
							delete normalized[container];
						} catch {}
						return normalized;
					});
				} catch (e) {
					// try next combo
				}
			}
		}
	}

	// Final fallback: no ACF fields available; fetch base and try to derive youtube id from content
	const fallbackQuery = gql`
		query AllSermons_BaseOnly {
			sermons(first: 10) {
				nodes {
					${baseFields}
				}
			}
		}
	`;
	const { data } = await client.query({ query: fallbackQuery });
	const nodes = data?.sermons?.nodes || [];
	const extractYoutubeId = (html = "") => {
		const watch = html.match(
			/youtube\.com\/(?:watch\?v=|embed\/)\s*([\w-]{11})/i
		);
		if (watch && watch[1]) return watch[1];
		const short = html.match(/youtu\.be\/([\w-]{11})/i);
		if (short && short[1]) return short[1];
		const vParam = html.match(/[?&]v=([\w-]{11})/i);
		if (vParam && vParam[1]) return vParam[1];
		return null;
	};
	return nodes.map((n) => ({
		...n,
		acfSermonFields: {
			sermon_speaker: null,
			speaker: null,
			youtube_id: extractYoutubeId(n?.content || ""),
			youtubeId: extractYoutubeId(n?.content || ""),
		},
	}));
}
