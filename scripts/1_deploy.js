async function main() {

// Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  // The line 3 function is to contact to artifcats and help deploy smart contracts with ether.js to the blockchain live

  // Deploy contract
  const token = await Token.deploy()
  await token.deployed()
  console.log(`Token Deployed to: ${token.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});
