const { transferSTX } = require('./stacksService');

async function rewardUser(userId, amount) {
  try {
    const result = await transferSTX(userId, amount);
    return result;
  } catch (error) {
    console.error('Error rewarding user:', error);
    throw error;
  }
}

module.exports = { rewardUser };
