const User = require('./profile.model');

/**
 * Get list of all Users confirmed by the blockchain
 * @returns {User[]}
 */
const listConfirmed = async (req, res) => {
    try {
        const confirmedUsers = await User.find({UserConfirmed: true}).exec();
        res.send(confirmedUsers)
    } catch (err) {
        console.error(err)
    }
};

module.exports = {listConfirmed};