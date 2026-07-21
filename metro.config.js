const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// expo-sqlite web desteği: wasm dosyasını asset olarak tanıt ve
// SharedArrayBuffer için gereken COOP/COEP başlıklarını ekle.
config.resolver.assetExts.push('wasm');

config.server = config.server ?? {};
const onceEnhance = config.server.enhanceMiddleware;
config.server.enhanceMiddleware = (middleware, server) => {
  const base = onceEnhance ? onceEnhance(middleware, server) : middleware;
  return (req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    base(req, res, next);
  };
};

module.exports = config;
