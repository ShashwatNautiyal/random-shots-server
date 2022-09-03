const { gql } = require("apollo-server");

const typeDef = gql`
  type Query {
    randomPhotos(
      page: Int
      per_page: Int
      topics: String
      collections: String
    ): PaginatedRandomPhotos
  }

  type PaginatedRandomPhotos {
    result: [RandomPhoto!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    nextPage: Int
    totalPages: Int!
    totalCount: Int!
  }

  type RandomPhoto {
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
    views: Int
    downloads: Int
    location: Location
    exif: Exif
    user: User
    current_user_collections: [String]
    categories: [String]
    links: Links
    urls: Urls
  }

  type Position {
    latitude: String
    longitude: String
  }

  type Location {
    title: String
    name: String
    city: String
    country: String
    position: Position
  }

  type Exif {
    make: String
    model: String
    name: String
    exposure_time: String
    aperture: String
    focal_length: String
    iso: Int
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

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
    small_s3: String
  }
`;

module.exports = typeDef;
