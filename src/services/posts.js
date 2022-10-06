import { checkError, client } from './client';

export async function getPosts() {
  const resp = await client.from('posts').select('*');
  return checkError(resp);
}

export async function getPostDetail(id) {
  const resp = await client.from('posts').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updatePost(id, title, description) {
  console.log(id, title, description);
  const resp = await client.from('posts').update({ title, description }).match({ id });
  return checkError(resp);
}

export async function createPost(title, description) {
  const resp = await client.from('posts').insert({ post_title: title, description });
  return checkError(resp);
}
