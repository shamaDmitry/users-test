export const allUsersQuery = `*[_type == 'user'] | order(last_name desc) {
  _id,
  first_name,
  last_name,
  'position': position->position
}`;

export const usersPositionQuery = `*[_type == "position"]`;

export const userByIdQuery = (id) => `*[_type == "user" && _id == "${id}"]`;

export const userByPositionQuery = (positionId) => `*[_type == 'user' && position._ref == '${positionId}'] {
  ...,
  'position': position->position
}`;