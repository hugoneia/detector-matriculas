// metro.config.js - Versión compatible con Node 14
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Forzamos la compatibilidad manual sin operadores modernos (??=)
if (config.resolver) {
  if (!config.resolver.sourceExts) {
    config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx'];
  }
  if (!config.resolver.assetExts) {
    config.resolver.assetExts = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
  }
}

module.exports = config;