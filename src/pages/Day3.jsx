import { useState, useEffect } from "react";
import Case from "../components/Case";
import Post from "./Post";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Day3() {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

   // Mendapatkan nomor halaman dari URL menggunakan useParams
   const { pageNumber } = useParams();
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setPost(json));

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setPost(response.data);
    })
  }, []);
  useEffect(() => {
    if (pageNumber) {
      setCurrentPage(Number(pageNumber));
    }
  }, [pageNumber]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost); 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, "", `/day3/${pageNumber}`);
  };
  return (
    <Case>
      <div className="w-full max-w-lg">
        <h4 className="text-2xl">Belajar fetch API</h4>
        {currentPost.map((post) => (
          <Post title={post.title} desc={post.body} key={post.id} />
        ))}

        <div className="pagination">
          {Array.from({length: Math.ceil(post.length / postsPerPage)}).map((_, index) => (
            <button
              className="page-link border border-black px-2 py-1"
              key={index}
              onClick={() => paginate(index+1)}
            >{index+1}</button>
          ))}
        </div>
      </div>
    </Case>
  );
}
