async function getMacroAutomationConfig(req, res) {
  res.json({
    engine: 'MacroAutomation',
    model: 'trigger-condition-action',
    example: 'When Instagram opens -> Block app'
  });
}

module.exports = { getMacroAutomationConfig };
