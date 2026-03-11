async function getSafeBlockConfig(req, res) {
  res.json({
    engine: 'SafeBlock',
    capabilities: ['strict-focus-mode', 'prevent-uninstall', 'lock-settings', 'emergency-breaks']
  });
}

module.exports = { getSafeBlockConfig };
