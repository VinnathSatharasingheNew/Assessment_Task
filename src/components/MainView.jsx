import usePostStore from "../store/usePostStore";

const AdminView = () => {
  const comments = usePostStore((state) => state.comments);

  return (
    <div className="mt-8 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Admin View</h2>
      <h3 className="text-xl font-bold mb-2"> Comments</h3>
      <ul className="space-y-2 mt-2">
        {comments.map((c, idx) => (
          <t key={idx} className="border-b pb-2">
            <span className="font-semibold mr-2">{idx + 1}.</span>
            <strong>{c.name}</strong>: {c.text}
            <div className="text-xs text-gray-500">
              {new Date(c.timestamp).toLocaleString()}
            </div>
          </t>
        ))}
      </ul>
    </div>
  );
};

export default AdminView;
