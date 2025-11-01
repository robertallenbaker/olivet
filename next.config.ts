import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	async redirects() {
		return [
			{
				source: "/event/:slug*",
				destination: "/events/:slug*",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
