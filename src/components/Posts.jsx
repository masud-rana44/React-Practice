import { useParams, useNavigate } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <div>Posts {params.postId}</div>
      <button onClick={goBack}>Go Back Home</button>
    </div>
  );
};

export default Posts;
