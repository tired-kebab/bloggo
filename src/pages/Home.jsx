/* eslint-disable react/prop-types */
import Post from "../components/Post";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [posts] = useOutletContext();

  return (
    <div>
      {posts?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Home;
