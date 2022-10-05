import { checkError, client } from './client';

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  return checkError(resp);
}

export async function getPostDetail(id) {
  const resp = await client.from('posts').select('*').match({ id }).single();
  return checkError(resp);
}
