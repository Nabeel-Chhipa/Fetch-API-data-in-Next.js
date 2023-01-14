import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=6");
  return posts.json();
}

const page = () => {
  let { posts } = use(getPosts());
  return (
    <div>
      <ul>
        {posts?.map((post) => <li key={post.id}>{post.title}</li> )}
      </ul>
    </div>
  );
};

export default page;
