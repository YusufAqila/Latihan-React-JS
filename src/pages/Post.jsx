
import PropTypes from "prop-types";
const Post = ({ title, desc }) => {
  return (
    <div className="post flex border border-black justify-center items-center m-4">
      <div className="img-thumb">
        <img src="https://picsum.photos/200/200" className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px]" alt="Image Post" />
      </div>
      <div className="content max-h-[150px] overflow-hidden ml-2 pr-10">
        <p className="title text-lg capitalize truncate">{title}</p>
        <p className="desc text-sm capitalize indent-2 text-elipsis overflow-hidden  line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}
export default Post;
