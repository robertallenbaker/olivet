import { redirect } from "next/navigation";

export default async function Page({ params }: { params: any }) {
	const resolved = await params;
	const slug = resolved?.slug;
	// Permanent redirect to the canonical /events/[slug] page
	redirect(`/events/${slug}`);
}
