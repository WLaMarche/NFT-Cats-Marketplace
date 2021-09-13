const Token = artifacts.require("KittycontractNFT");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
