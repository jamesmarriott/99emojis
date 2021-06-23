// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|jpe?g|gif)$/i,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //         },
  //       ],
  //     },
  //   ],
  // },
}