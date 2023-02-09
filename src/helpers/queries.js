export const allUsersQuery = `*[_type == 'user'] | order(last_name desc) {
  _id,
  first_name,
  last_name,
  'position': position->position
}`;

export const usersPositionQuery = `*[_type == "position"].position`;

export const userByIdQuery = (id) => `*[_type == "user" && _id == "${id}"] {...,'position': position->position,}`;

export const userByPositionQuery = (position) => `*[_type == 'user' && position->position == '${position}'] {
  ...,
  'position': position->position
}`;