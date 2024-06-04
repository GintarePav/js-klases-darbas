const Post = (props) => {
  return (
    <div className="card">
      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
        <i className="bi bi-collection"></i>
      </div>
      <h2 className="fs-4 fw-bold">{props.title}</h2>
      <p className="mb-0">{props.about}</p>
    </div>
  );
};

export default Post