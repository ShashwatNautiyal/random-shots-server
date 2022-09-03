const { gql } = require("apollo-server");

const typeDef = gql`
  type Query {
    userProfile(username: String!): UserProfile
  }

  type UserProfile {
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
    followed_by_user: Boolean
    badge: String
    followers_count: Int
    following_count: Int
    allow_messages: Boolean
    numeric_id: Int
    downloads: Int
    meta: Meta
    tags: Tags
    photos: [Photos]
    social: Social
    profile_image: ProfileImage
    links: Links
  }

  type Meta {
    index: Boolean
  }

  type Aggregated {
    type: String
    title: String
    source: Source
  }

  type Custom {
    type: String
    title: String
    source: Source
  }

  type Tags {
    aggregated: [Aggregated]
    custom: [Custom]
  }

  type Source {
    title: String
    subtitle: String
    description: String
    meta_title: String
    meta_description: String
    cover_photo: CoverPhoto
    ancestry: Ancestry
  }

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
    small_s3: String
  }

  type Photos {
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

  type Artsculture {
    status: String
    approved_on: String
  }

  type Texturespatterns {
    status: String
    approved_on: String
  }

  type TopicSubmissions {
    artsculture: Artsculture
    texturespatterns: Texturespatterns
  }

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
    small_s3: String
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

  type Subcategory {
    slug: String
    pretty_slug: String
  }

  type Category {
    slug: String
    pretty_slug: String
  }

  type Type {
    slug: String
    pretty_slug: String
  }

  type Ancestry {
    subcategory: Subcategory
    category: Category
    type: Type
  }
`;

module.exports = typeDef;
