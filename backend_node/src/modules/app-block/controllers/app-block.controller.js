async function getAppBlockConfig(req, res) {
  res.json({
    engine: 'AppBlock',
    capabilities: ['detect-opened-app', 'block-selected-apps', 'overlay-screen', 'focus-sessions']
  });
}

module.exports = { getAppBlockConfig };
