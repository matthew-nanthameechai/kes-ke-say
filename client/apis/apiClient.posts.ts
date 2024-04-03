import request from 'superagent'
import { Post } from '../../models/post'

const root = '/api/v1/posts'

export async function getAllPosts(): Promise<Post[]> {
  const res = await request.get(root)
  return res.body
}
