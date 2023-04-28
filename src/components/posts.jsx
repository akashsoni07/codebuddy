import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://codebuddy.review/posts");
      setPosts(res);
    })();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Posts</h2>
          <div className="row mt-3">
            {posts.map((post) => (
              <div className="col-md-4">
                <div className="card mt-2" key={post?.id}>
                  <div className="card-header text-center">#1</div>
                  <div className="card-body">
                    <div>
                      <img
                        className="img-fluid"
                        style={{ borderRadius: "50%" }}
                        src={post?.avatar}
                        width={25}
                        height={25}
                        alt="profile"
                      />{" "}
                      {post?.firstName} {post?.lastName}
                    </div>
                    <div>
                      <img
                        className="img-fluid mt-2"
                        src={post?.image}
                        alt="post"
                      />
                    </div>
                    <p>{post?.writeup}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
