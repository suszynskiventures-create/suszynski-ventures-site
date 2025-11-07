export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
  // keep gradient utilities used by the background blobs
  safelist: [
    {
      pattern: /(from|via|to)-(indigo|fuchsia|blue|sky)-(400|500)\/(10|20)/,
    },
  ],
};
