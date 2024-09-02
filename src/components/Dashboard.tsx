import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { can } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {can("edit_posts") && <button>Edit Post</button>}
      {can("delete_posts") && <button>Delete Post</button>}
    </div>
  );
};
