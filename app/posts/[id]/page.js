"use client";
import { use } from "react";

async function getPost(id) {
  let posts = await fetch(`https://dummyjson.com/posts?${id}`);
  return posts.json();
}

const Page = ({ params }) => {
  let id = params.id;
  let { posts } = use(getPost(id));
  const postData = posts.find((obj) => obj.id == id);
  console.log("Post data : ", postData);

  return (
    <>
      <style jsx>
        {`
          .postContentWrapper {
            width: 50%;
            margin: 0 auto;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div className="postContentWrapper">
        <div className="postContent">
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
          <h4>Tags</h4>
          <ul>
            {postData.tags.map((tags, index) => (
              <li key={index}>{tags}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
