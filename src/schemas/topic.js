const { gql } = require("apollo-server");

const typeDef = gql`
  enum OrderByOptions {
    featured
    latest
    oldest
    position
  }

  type Query {
    topics(page: Int, per_page: Int, order_by: OrderByOptions): PaginatedTopics
  }

  type PaginatedTopics {
    result: [Topic!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    nextPage: Int
    totalPages: Int!
    totalCount: Int!
  }

  type Topic {
    id: ID!
    slug: String
    title: String
    description: String
    published_at: String
    updated_at: String
    starts_at: String
    ends_at: String
    only_submissions_after: String
    visibility: String
    featured: Boolean
    total_photos: Int
    total_current_user_submissions: String
    status: String
    preview_photos: [PreviewPhotos]
    cover_photo: CoverPhoto
    owners: [Owners]
    links: Links
    current_user_contributions: [String]
  }

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
    small_s3: String
  }

  type PreviewPhotos {
    id: ID!
    created_at: String
    updated_at: String
    blur_hash: String
    urls: Urls
  }

  type Social {
    instagram_username: String
    portfolio_url: String
    twitter_username: String
    paypal_email: String
  }

  type ProfileImage {
    small: String
    medium: String
    large: String
  }

  type Links {
    self: String
    html: String
    photos: String
    likes: String
    portfolio: String
    following: String
    followers: String
  }

  type User {
    id: ID!
    updated_at: String
    username: String
    name: String
    first_name: String
    last_name: String
    twitter_username: String
    portfolio_url: String
    bio: String
    location: String
    instagram_username: String
    total_collections: Int
    total_likes: Int
    total_photos: Int
    accepted_tos: Boolean
    for_hire: Boolean
    social: Social
    profile_image: ProfileImage
    links: Links
  }

  type Nature {
    status: String
    approved_on: String
  }

  type Wallpapers {
    status: String
    approved_on: String
  }

  type TopicSubmissions {
    nature: Nature
    wallpapers: Wallpapers
  }

  type CoverPhoto {
    id: ID!
    created_at: String
    updated_at: String
    promoted_at: String
    width: Int
    height: Int
    color: String
    blur_hash: String
    description: String
    alt_description: String
    likes: Int
    liked_by_user: Boolean
    sponsorship: String
    user: User
    topic_submissions: TopicSubmissions
    current_user_collections: [String]
    categories: [String]
    links: Links
    urls: Urls
  }

  type Owners {
    id: ID!
    updated_at: String
    username: String
    name: String
    first_name: String
    last_name: String
    twitter_username: String
    portfolio_url: String
    bio: String
    location: String
    instagram_username: String
    total_collections: Int
    total_likes: Int
    total_photos: Int
    accepted_tos: Boolean
    for_hire: Boolean
    social: Social
    profile_image: ProfileImage
    links: Links
  }
`;

module.exports = typeDef;
