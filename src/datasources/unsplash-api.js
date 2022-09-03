const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

const UNSPLASH_CONSTRAINTS = {
  key: 0,
  limit: 10,
  rateLimit: 50,
  remainingLimit: 50
};

class UnsplashAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.unsplash.com";
  }

  async willSendRequest(req) {
    if (UNSPLASH_CONSTRAINTS.remainingLimit <= UNSPLASH_CONSTRAINTS.limit) {
      UNSPLASH_CONSTRAINTS.key = UNSPLASH_CONSTRAINTS.key === 9 ? 0 : UNSPLASH_CONSTRAINTS.key + 1;
      UNSPLASH_CONSTRAINTS.remainingLimit = UNSPLASH_CONSTRAINTS.rateLimit;
    }
    UNSPLASH_CONSTRAINTS.remainingLimit = UNSPLASH_CONSTRAINTS.remainingLimit - 1;
    console.log(UNSPLASH_CONSTRAINTS);
    req.headers.set(
      "Authorization",
      `Client-ID ${process.env[`UNSPLASH_KEY_${UNSPLASH_CONSTRAINTS.key}`]}`
    );
  }

  async didReceiveResponse(response, _request) {
    console.log(response.headers.get("x-ratelimit-remaining"));
    if (response.ok) {
      return { result: response.json(), headers: response.headers };
    } else {
      UNSPLASH_CONSTRAINTS.key = UNSPLASH_CONSTRAINTS.key === 9 ? 0 : UNSPLASH_CONSTRAINTS.key + 1;
      UNSPLASH_CONSTRAINTS.remainingLimit = UNSPLASH_CONSTRAINTS.rateLimit;
      throw await this.errorFromResponse(response);
    }
  }

  removeUndefinedParams(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }

  getRandomPhotos(count, topics, collections) {
    return this.get("photos/random", this.removeUndefinedParams({ count, topics, collections }));
  }

  getTopicPhotos(topicIdOrSlug, page, per_page, orientation, order_by) {
    return this.get(
      `/topics/${topicIdOrSlug}/photos`,
      this.removeUndefinedParams({ page, per_page, orientation, order_by })
    );
  }

  getTopics(page, per_page, order_by) {
    return this.get("/topics", this.removeUndefinedParams({ page, per_page, order_by }));
  }

  getUserProfile(username) {
    return this.get(`/users/${username}`);
  }

  getUserPhotos(username, page, per_page, order_by, orientation) {
    return this.get(
      `/users/${username}/photos`,
      this.removeUndefinedParams({
        page,
        per_page,
        order_by,
        orientation
      })
    );
  }
}

module.exports = UnsplashAPI;
