module.exports = {
  pyth: {
    solanaClusterName: 'devnet'
  },
  token: '',
  api: 'https://api.betanet.algoexplorer.io',
  port: '',
  symbols: {
    'BTC/USD': {
      appId: 3020301,
      verifierpk: 'OPDM7ACAW64Q4VBWAL77Z5SHSJVZZ44V3BAN7W44U43SUXEOUENZMZYOQU',
      buffersize: 50,
      ratio: 'asap',
      strategy: 'maxconf',
      phony: false
    },
    'ETH/USD': {
      appId: 3020301,
      verifierpk: 'OPDM7ACAW64Q4VBWAL77Z5SHSJVZZ44V3BAN7W44U43SUXEOUENZMZYOQU',
      buffersize: 50,
      ratio: 'asap',
      strategy: 'maxconf',
      phony: false
    }
  }
}