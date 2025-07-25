import { useState } from "react";
import usePostStore from "../store/usePostStore";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const addComment = usePostStore((state) => state.addComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    addComment(name.trim(), comment.trim());
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white p-4 rounded-lg shadow space-y-4 border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-700">Leave a Comment</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
      </div>
      <br />
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Your Comment
        </label>
        <textarea
          placeholder="Write your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow"
      >
        Save Comment
      </button>
    </form>
  );
};

export default CommentForm;
