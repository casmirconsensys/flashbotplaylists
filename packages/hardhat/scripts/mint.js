/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0x5D25Da9379943E88A35954dB0F5fe218f50AC00E"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const yourCollectible = await ethers.getContractAt('YourCollectible', fs.readFileSync("./artifacts/YourCollectible.address").toString())


  const takashisixnine = {
    "description":"Takashi 6ix 9ine",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmZVF237kpkgc5EASeWczMJ2CiQE2mDu6sgDXZABFPz3ut",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmZVF237kpkgc5EASeWczMJ2CiQE2mDu6sgDXZABFPz3ut",
    "name": "6ix9ine",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "blue"
       },
       {
         "trait_type": "Tongue",
         "value": "hanging out"
       },
       {
         "trait_type": "Stamina",
         "value": 69
       }
    ]
  }
  console.log("Uploading takashisixnine...")
  const uploaded = await ipfs.add(JSON.stringify(takashisixnine))

  console.log("Minting takashisixnine with IPFS hash ("+uploaded.path+")")
  await yourCollectible.mintItem(toAddress,uploaded.path,{gasLimit:400000})


  await sleep(delayMS)


  const sixnine = {
    "description": "Why is it so lit anyways?",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmVfF5KrArmTttc4jdg8Xzaa6xvHX2Mgcks3DvfWGestuR",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmVfF5KrArmTttc4jdg8Xzaa6xvHX2Mgcks3DvfWGestuR",
    "name": "6ix9ine",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "grey"
       },
       {
         "trait_type": "Eyes",
         "value": "glasses"
       },
       {
         "trait_type": "Stamina",
         "value": 69
       }
    ]
  }
  console.log("Uploading sixnine...")
  const uploadedsixnine = await ipfs.add(JSON.stringify(sixnine))

  console.log("Minting sixnine with IPFS hash ("+uploadedsixnine.path+")")
  await yourCollectible.mintItem(toAddress,uploadedsixnine.path,{gasLimit:400000})



  await sleep(delayMS)


  const migos = {
    "description": "We from dat way!",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmUgjWSV1mDjrvLMm4ctrV3tz2NUvA3voVpFxj9s3Puhpk",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmUgjWSV1mDjrvLMm4ctrV3tz2NUvA3voVpFxj9s3Puhpk",
    "name": "Migos",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "Grey"
       },
       {
         "trait_type": "Eyes",
         "value": "glasses"
       },
       {
         "trait_type": "Stamina",
         "value": 33
       }
    ]
  }
  console.log("Uploading migos...")
  const uploadedmigos = await ipfs.add(JSON.stringify(migos))

  console.log("Minting migos with IPFS hash ("+uploadedmigos.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmigos.path,{gasLimit:400000})



  await sleep(delayMS)


  const twentyonesavage = {
    "description": "Issa Knife",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmejyLqX4cmqh6q9SpvwzLXegUn5eCTyomdYbt35jtAM6Q",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmejyLqX4cmqh6q9SpvwzLXegUn5eCTyomdYbt35jtAM6Q",
    "name": "21Savage",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "red"
       },
       {
         "trait_type": "Eyes",
         "value": "savage stare"
       },
       {
         "trait_type": "Stamina",
         "value": 21
       }
    ]
  }
  console.log("Uploading 21Savage...")
  const uploadedtwentyonesavage = await ipfs.add(JSON.stringify(twentyonesavage))

  console.log("Minting 21Savage with IPFS hash ("+uploadedtwentyonesavage.path+")")
  await yourCollectible.mintItem(toAddress,uploadedtwentyonesavage.path,{gasLimit:400000})



  await sleep(delayMS)


  const guccimane = {
    "description": "So Icey Brrrrrrrr.",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmQrzVCu84ezign2vrGdYik12ezsGu9rLvnGHCGScw9mXg",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmQrzVCu84ezign2vrGdYik12ezsGu9rLvnGHCGScw9mXg",
    "name": "Gucci Mane",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "red"
       },
       {
         "trait_type": "Eyes",
         "value": "glasses"
       },
       {
         "trait_type": "Stamina",
         "value": 66
       }
    ]
  }
  console.log("Uploading guccimane...")
  const uploadedguccimane = await ipfs.add(JSON.stringify(guccimane))

  console.log("Minting guccimane with IPFS hash ("+uploadedguccimane.path+")")
  await yourCollectible.mintItem(toAddress,uploadedguccimane.path,{gasLimit:400000})





  const lilxan = {
    "description": "Yaaaar!",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmPosQFxkSh4XVGzUaM77rieqb8Rj5FZfdRet1Gq8DurAe",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmPosQFxkSh4XVGzUaM77rieqb8Rj5FZfdRet1Gq8DurAe",
    "name": "Lil Xan",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "charcoal"
       },
       {
         "trait_type": "Eyes",
         "value": "glasses"
       },
       {
         "trait_type": "Stamina",
         "value": 99
       }
    ]
  }
  console.log("Uploading lilxan...")
  const uploadedlilxan = await ipfs.add(JSON.stringify(lilxan))

  console.log("Minting lilxan with IPFS hash ("+uploadedlilxan.path+")")
  await yourCollectible.mintItem(toAddress,uploadedlilxan.path,{gasLimit:400000})




  await sleep(delayMS)

  console.log("Transferring Ownership of YourCollectible to "+toAddress+"...")

  await yourCollectible.transferOwnership(toAddress)

  await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await yourCollectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
