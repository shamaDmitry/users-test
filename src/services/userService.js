import { API_URL } from '../helpers/constants';
import { fetcher } from '../helpers/fetcher';
import { usersPositionQuery } from '../helpers/queries';

export const getUserPositionDropdownList = async () => {
  return await fetcher(`${API_URL}?query=${usersPositionQuery}`);
}