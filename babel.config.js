module.exports = function configBabel(api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      'minify',
    ],
    plugins: [],
  }
}
