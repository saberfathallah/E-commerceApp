
const user =`
type User {
    firstName: String
    lastName: String
    age: Int
    type: String
    adress: String
    mail: String
    password: String
  }

  input UserInput {
    firstName: String
    lastName: String
    age: Int
    type: String
    adress: String
    mail: String
    password: String
  }

  type userLogged {
    user: User
    token: String
    error: String
  }

  type userResultType {
    error: String
    user: User
  }

  type usersResultType {
    error: String
    users: [User]
  }

  type userdeletedType  {
    success: String
    error: String
  }

  type Book {
    title: String
    author: String
  }
`;
export default [user];