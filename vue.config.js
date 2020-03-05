module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '/': {
        target: process.env.VUE_APP_AUTH_BASE_URL,
        changeOrigin: true,
      },
    },
  },
};
