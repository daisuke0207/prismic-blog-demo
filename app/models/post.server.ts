import * as prismicH from "@prismicio/helpers";
import { client } from "./prismic";

export type Post = {
  uid: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

export async function getPost(uid: string | undefined) {
  if (!uid) return { uid: "undefined", title: "undefined", body: "undefined" };
  const document = await client.getByUID("blog", uid);
  const title = prismicH.asText(document.data.title);
  const richBody = document.data.body;
  return { uid, title, richBody: richBody };
}

export async function getPosts() {
  const documents: Array<any> = await client.getAllByType("blog");
  return documents.map((document) => {
    return {
      uid: document.uid,
      title: prismicH.asText(document.data.title),
    };
  });
}
