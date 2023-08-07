const db = require('../config/connection');
const { User, Wireframe } = require('../models');
const userSeeds = require('./userSeeds.json');
const wireframeSeeds = require('./wireframeSeeds.json');

db.once('open', async () => {
  try {
    await Wireframe.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < wireframeSeeds.length; i++) {
      const { _id, wireframeAuthor } = await Wireframe.create(wireframeSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: wireframeAuthor },
        {
          $addToSet: {
            wireframes: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
