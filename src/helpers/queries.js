export const allUsersQuery = `*[_type == "user"]`;
export const usersPositionQuery = `*[_type == "user"].position`;
export const userByIdQuery = (id) => `*[_type == "user" && _id == "${id}"]`;