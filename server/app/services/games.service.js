const { ObjectId } = require("mongodb");

class GamesService {
  constructor(client) {
    this.Game = client.db().collection("games");
  }

  extractGamesData(payload) {
    const game = {
      name: payload.name,
      price: parseInt(payload.price) || 0,
      sale: parseInt(payload.sale) || 0,
      type: payload.type || "game",
      img: payload.img,
      description: payload.description,
      more: payload.more || {},
    };

    Object.keys(game).forEach(
      (key) => game[key] === undefined && delete game[key]
    );
    return game;
  }

  async create(payload) {
    const game = this.extractGamesData(payload);
    const result = await this.Game.findOneAndUpdate(
      game,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Game.find();
        resolve(await cursor.toArray());
      } catch (error) {
        reject(null);
      }
    });
  }

  async findByName(name) {
    console.log(name);
    const cursor = await this.Game.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
    return await cursor.toArray();
  }

  async findById(id) {
    return await this.Game.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const game = this.extractGamesData(payload);
    const result = await this.Game.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      { $set: game },
      { returnDocument: "after" }
    );
    return result.value;
  }
}

module.exports = GamesService;
