const withTM = require('next-transpile-modules')(['@react-three/drei']);

module.exports = withTM({
  experimental: { esmExternals: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/i,
      use: {
        loader: 'file-loader',
      },
    });

    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    });

    return config;
  },
});