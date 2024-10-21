const { StacksTestnet } = require('@stacks/network');
const { callReadOnlyFunction, makeContractCall } = require('@stacks/transactions');
const { privateKeyToString } = require('@stacks/encryption');

const network = new StacksTestnet();
const contractAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const contractName = 'identrip-nft';
const functionName = 'mint-restaurant-nft';

const privateKey = process.env.STACKS_PRIVATE_KEY;

async function mintRestaurantNFT(restaurantName, stxAddress) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName,
    functionArgs: [restaurantName, stxAddress],
    senderKey: privateKeyToString(privateKey),
    network
  };

  try {
    const transaction = await makeContractCall(txOptions);
    const result = await network.broadcastTransaction(transaction);
    return result;
  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
}

async function verifyRestaurant(nftTokenId) {
  // Implementar lógica de verificación
}

async function addReview(nftTokenId, reviewData) {
  // Implementar lógica para agregar reseña verificada
}

module.exports = { mintRestaurantNFT, verifyRestaurant, addReview };
