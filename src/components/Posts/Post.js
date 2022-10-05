export default function Post({ title, description }) {
  return (
    <div className="post-it">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
