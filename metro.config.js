const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// expo-sqlite web desteği: wasm dosyasını asset olarak tanıt.
// COOP + COEP:credentialless — SharedArrayBuffer'ı (SQLite wasm için) korur,
// ama require-corp'un aksine dış (Wikimedia) görsellerin yüklenmesine izin verir.
// Not: Bu başlıklar YALNIZCA web önizlemesini etkiler; native (telefon/emülatör)
// tarafında COEP diye bir kavram yok, görseller her hâlükârda yüklenir.
config.resolver.assetExts.push('wasm');

config.server = config.server ?? {};
const onceEnhance = config.server.enhanceMiddleware;
config.server.enhanceMiddleware = (middleware, server) => {
  const base = onceEnhance ? onceEnhance(middleware, server) : middleware;
  return (req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
    base(req, res, next);
  };
};

module.exports = config;
