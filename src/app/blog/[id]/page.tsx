"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { posts } from "@/app/data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  // Comments state
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return <h1 className="text-center text-2xl text-red-500">Post not found!</h1>;
  }

  // Add new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <Image src={`https://loremflickr.com/500/300?random=${id}`} alt={post.title} width={800} height={400} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-4xl font-bold text-pink-400 mt-4">{post.title}</h1>
      <p className="mt-4 text-gray-300">{post.description}</p>

      {/* Comments Section */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold">Comments</h2>

        <div className="mt-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 bg-gray-700 rounded text-white"
          />
          <button
            onClick={handleAddComment}
            className="mt-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
          >
            Add Comment
          </button>
        </div>

        <div className="mt-4 space-y-2">
          {comments.length === 0 ? (
            <p className="text-gray-400">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="p-2 bg-gray-700 rounded">
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
