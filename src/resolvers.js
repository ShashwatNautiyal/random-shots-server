const resolvers = {
  Query: {
    randomPhotos: async (_, { page = 1, per_page = 22, topics, collections }, { dataSources }) => {
      const { result, headers } = await dataSources.unsplashAPI.getRandomPhotos(
        per_page,
        topics,
        collections
      );
      return paginateResult(result, headers, page, per_page);
    },

    topicPhotos: async (
      _,
      { topicIdOrSlug, page = 1, per_page = 10, orientation, order_by },
      { dataSources }
    ) => {
      const { result, headers } = await dataSources.unsplashAPI.getTopicPhotos(
        topicIdOrSlug,
        page,
        per_page,
        orientation,
        order_by
      );
      return paginateResult(result, headers, page, per_page);
    },

    topics: async (_, { page, per_page, order_by }, { dataSources }) => {
      const { result, headers } = await dataSources.unsplashAPI.getTopics(page, per_page, order_by);
      return paginateResult(result, headers, page, per_page);
    },

    userProfile: async (_, { username }, { dataSources }) => {
      const { result } = await dataSources.unsplashAPI.getUserProfile(username);
      return result;
    },

    userPhotos: async (
      _,
      { username, page = 1, per_page = 10, order_by = "latest", orientation = "landscape" },
      { dataSources }
    ) => {
      const { result, headers } = await dataSources.unsplashAPI.getUserPhotos(
        username,
        page,
        per_page,
        order_by,
        orientation
      );
      return paginateResult(result, headers, page, per_page);
    }
  }
};

const paginateResult = (result, headers, page = 1, per_page) => {
  const totalCount = headers.get("x-total") ? headers.get("x-total") : 1000;
  const totalPages = Math.ceil(totalCount / per_page);
  const nextPage = page < totalPages ? page + 1 : undefined;
  const hasNextPage = nextPage === undefined ? false : true;

  return {
    result,
    pageInfo: {
      hasNextPage,
      nextPage,
      totalPages,
      totalCount
    }
  };
};

module.exports = resolvers;
