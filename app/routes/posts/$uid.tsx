import { marked } from "marked";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { getPost } from "~/models/post.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.uid, `params.uid is required`);

  const post = await getPost(params.uid);
  invariant(post, `Post not found: ${params.uid}`);

  return { post };
};

export default function PostSlug() {
  const { post } = useLoaderData();
  console.log(post);
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
