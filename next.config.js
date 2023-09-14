const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
