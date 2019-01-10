
const favorite = `
type Favorite {
  productId: ID
  userId: ID
}

type favoriteResultType {
  error: String
  favorite: Favorite
}

type favoriteListResultType {
  error: String
  favorites: [Product]
}

type favoriteDeletedType  {
  success: String
  error: String
}
`;
export default [favorite];
