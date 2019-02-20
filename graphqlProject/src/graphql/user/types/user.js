
const user = `
type User {
    firstName: String
    lastName: String
    age: Int
    type: String
    adress: String
    mail: String
    password: String
    _id: ID
  }

type Invitation {
  _id: ID
  id: ID
  idInvited: ID
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

  type usersInvetedResultType {
    error: String
    invitations: [Invitation]
  }

  type userdeletedType  {
    success: String
    error: String
  }
`;
export default [user];
