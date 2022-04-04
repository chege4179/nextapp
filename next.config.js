/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		MONGO_URI: "mongodb://localhost:27017/nextapp",
	}
}

module.exports = nextConfig
