require("@nomicfoundation/hardhat-toolbox");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200 // Adjust the number of optimization runs as needed
      }
    }
  },
  networks: {
    amoy: {
      URL: <API KEY>, 
      accounts: [<PRIVATE KEY>] 
    }
  },
};
