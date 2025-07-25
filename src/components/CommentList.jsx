import usePostStore from '../store/usePostStore';

const CommentList = () => {
  const comments = usePostStore(state => state.comments);
  const clearStorage = usePostStore(state => state.clearStorage);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Comments</h2>

      {comments.length === 0 && (
        <p className="text-gray-500 italic mt-2">No comments yet.</p>
      )}

      {comments.map((c, idx) => (
        <div key={idx} className="border-b py-2">
          <strong>{c.name}</strong>: {c.text}
          <div className="text-xs text-gray-400">
            {new Date(c.timestamp).toLocaleString()}
          </div>
        </div>
      ))}

      {comments.length > 0 && (
        <button
          onClick={clearStorage}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Clear All Data
        </button>
      )}
    </div>
  );
};

export default CommentList;

