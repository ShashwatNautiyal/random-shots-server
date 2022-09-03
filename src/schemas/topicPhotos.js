const { gql } = require("apollo-server");

const typeDef = gql`
  enum OrientationOption {
    landscape
    portrait
    squarish
  }

  enum OrderByOption {
    latest
    oldest
    popular
  }

  type Query {
    topicPhotos(
      topicIdOrSlug: String!
      page: Int
      per_page: Int
      orientation: OrientationOption
      order_by: OrderByOption
    ): PaginatedTopicPhotos
  }

  type PaginatedTopicPhotos {
    result: [TopicPhoto!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    nextPage: Int
    totalPages: Int!
    totalCount: Int!
  }

  type TopicPhoto {
    id: ID!
    created_at: String
    updated_at: String
    width: Int
    height: Int
    color: String
    blur_hash: String
    likes: Int
    liked_by_user: Boolean
    description: String
    links: Links
    urls: Urls
    current_user_collections: [CurrentUserCollections]
    user: User
  }

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
  }

  type CurrentUserCollections {
    id: ID!
    title: String
    published_at: String
    last_collected_at: String
    updated_at: String
    cover_photo: String
    user: String
  }

  type Links {
    self: String
    html: String
    photos: String
    likes: String
    portfolio: String
  }

  type ProfileImage {
    small: String
    medium: String
    large: String
  }

  type User {
    id: ID!
    username: String
    name: String
    portfolio_url: String
    bio: String
    location: String
    total_likes: Int
    total_photos: Int
    total_collections: Int
    instagram_username: String
    twitter_username: String
    links: Links
    profile_image: ProfileImage
  }
`;

module.exports = typeDef;
