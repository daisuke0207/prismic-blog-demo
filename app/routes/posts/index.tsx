import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import type { Post } from "~/models/post.server";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Array<any>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.uid}>
            <Link to={post.uid} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
