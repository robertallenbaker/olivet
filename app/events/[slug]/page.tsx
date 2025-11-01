import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	getEventBySlug,
	getEventById,
	getEvents,
} from "../..//lib/graphql/events";

function stripHtml(html: string | null | undefined) {
	if (!html) return "";
	return html.replace(/<[^>]+>/g, "").trim();
}

function formatDate(iso: string | null | undefined) {
	if (!iso) return "";
	try {
		return new Date(iso).toLocaleString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
		});
	} catch (e) {
		return iso;
	}
}

export async function generateMetadata({
	params,
}: {
	params?: { slug?: string };
}) {
	const resolved = await params;
	const slug = resolved?.slug;
	const evt = await getEventBySlug(slug);
	if (!evt) return {};
	return {
		title: evt.title,
		description: stripHtml(evt.content).slice(0, 160),
		openGraph: {
			title: evt.title,
			description: stripHtml(evt.content).slice(0, 160),
			images: evt.featuredImage?.node?.sourceUrl
				? [evt.featuredImage.node.sourceUrl]
				: undefined,
		},
	};
}

export default async function Page({ params }: { params: any }) {
	const resolved = await params;
	const { slug } = resolved;

	// Try single-event helpers first
	let event = await getEventBySlug(slug);

	// If slug looks numeric, try ID-based fetch
	if (!event && /^\d+$/.test(String(slug))) {
		event = await getEventById(slug);
	}

	// Last resort: do a larger fetch and find locally
	if (!event) {
		const events = await getEvents(300);
		event = events.find((e: any) => {
			// Match by uri last segment (e.g. '/events/my-event' -> 'my-event')
			if (e.uri) {
				const normalized = String(e.uri).replace(/^\/+|\/+$/g, "");
				const parts = normalized.split("/");
				const last = parts[parts.length - 1];
				if (last === slug) return true;
				if (normalized === slug) return true;
			}
			// Match by slug or id
			if (e.slug && e.slug === slug) return true;
			if (String(e.id) === slug) return true;
			return false;
		});

		if (!event) {
			notFound();
		}
	}

	return (
		<main className='overflow-x-hidden'>
			<section className='pt-12 pb-12'>
				<div className='container'>
					<article className='max-w-4xl mx-auto bg-white rounded shadow p-6'>
						<h1 className='text-3xl font-bold mb-4'>
							{event.title}
						</h1>

						{event.startDate && (
							<p className='text-sm text-gray-600 mb-2'>
								{formatDate(event.startDate)}
							</p>
						)}

						{event.venue?.title && (
							<p className='text-sm text-gray-600 mb-4'>
								📍 {event.venue.title}
								{event.venue.city && `, ${event.venue.city}`}
								{event.venue.state && `, ${event.venue.state}`}
							</p>
						)}

						{event.featuredImage?.node?.sourceUrl && (
							<div className='mb-6'>
								<Image
									src={event.featuredImage.node.sourceUrl}
									alt={
										event.featuredImage.node.altText ||
										event.title
									}
									width={1200}
									height={600}
									className='w-full h-auto object-cover rounded'
								/>
							</div>
						)}

						{event.content ? (
							<div
								className='prose max-w-none'
								dangerouslySetInnerHTML={{
									__html: event.content,
								}}
							/>
						) : (
							<p className='text-sm text-gray-700'>
								{stripHtml(event.content)}
							</p>
						)}

						<div className='mt-6'>
							<Link
								href='/events'
								className='inline-block bg-blue text-white py-2 px-4 rounded'
							>
								Back to Events
							</Link>
							{event.uri && (
								<a
									href={event.uri}
									className='ml-3 inline-block text-blue-600 underline'
								>
									Original Link (if external)
								</a>
							)}
						</div>
					</article>
				</div>
			</section>
		</main>
	);
}
