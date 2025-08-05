// api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  let target = 'https://generativelanguage.googleapis.com'; // 目标 API

  // 创建代理
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 重写路径，去掉 Vercel Serverless Function 的前缀 /api/proxy
      // 例如：/api/proxy/v1/chat -> /v1/chat
      '^/api/proxy': '',
    },
  });

  proxy(req, res);
};
