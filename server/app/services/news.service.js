const { ObjectId } = require("mongodb");

class NewsService {
  constructor(client) {
    this.Post = client.db().collection("news");
  }

  extractNewData(payload) {
    const post = {
      title: payload.title,
      content: payload.content,
      thumbnail: payload.thumbnail,
      background: payload.background,
    };

    Object.keys(post).forEach(
      (key) => post[key] === undefined && delete post[key]
    );
    return post;
  }

  async create(payload) {
    const post = this.extractNewData(payload);
    const result = await this.Post.findOneAndUpdate(
      post,
      { $set: {} },
      { returnDocument: "after", upsert: true }
    );
    return result.value;
  }

  async find(filter) {
    return new Promise(async (resolve, reject) => {
      try {
        const cursor = await this.Post.find();
        resolve(await cursor.toArray());
      } catch (error) {
        reject(null);
      }
    });
  }

  async findByName(title) {
    console.log(title);
    const cursor = await this.Post.find({
      title: { $regex: new RegExp(title), $options: "i" },
    });
    return await cursor.toArray();
  }

  async findById(id) {
    return await this.Post.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id, payload) {
    const post = this.extractNewData(payload);
    const result = await this.Post.findOneAndUpdate(
      {
        _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
      },
      {
        $set: post,
      },
      { returnDocument: "after" }
    ); //
    return result.value;
  }

  async delete(id) {
    const result = await this.Post.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }
}

module.exports = NewsService;
