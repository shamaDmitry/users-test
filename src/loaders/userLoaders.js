import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/constants';
import { userByIdQuery } from '../helpers/queries';

export const userEditLoader = async ({ params }) => {
  let query = encodeURIComponent(userByIdQuery(params.id));
  const res = await fetcher(`${API_URL}/query/production?query=${query}`)

  return {
    mode: 'edit',
    data: res.result[0]
  }
}

export const userCreateLoader = () => {
  return {
    mode: 'create',
    data: null
  }
}