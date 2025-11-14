// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     images: {
//         qualities: [75, 85, 90, 100],
//     },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;