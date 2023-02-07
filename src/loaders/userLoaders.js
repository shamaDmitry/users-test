import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/constants';

export const userEditLoader = async ({ params }) => {
  let query = encodeURIComponent(`*[_type == "user" && _id == "${params.id}"]`);
  const res = await fetcher(`${API_URL}?query=${query}`)

  return {
    mode: 'edit',
    data: res.result[0]
  }
}

export const userCreateLoader = () => {
  return {
    mode: 'create',
    data: {}
  }
}