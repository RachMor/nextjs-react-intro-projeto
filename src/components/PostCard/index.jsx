import '../PostCard/styles.css';

export const PostCard = ({ post }) =>
{
  return (
    <div key={post.id} className="post">
      <img src={post.cover} alt={post.title}></img>
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
