/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "links.papareact.com", protocol: "https" }],
	},
};

export default nextConfig;
