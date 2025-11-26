import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "../components/UI/Container";
import PostCard from "../components/Blog/PostCard";
import AdUnit from "../components/Adsense/AdUnit";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { data: allPosts, loading } = useFetch("/blogs");
  console.log(allPosts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil((allPosts?.length || 0) / postsPerPage);

  return (
    <>
      <Helmet>
        <title>Blog - All Articles</title>
        <meta
          name="description"
          content="Browse all our articles on technology, programming, and digital innovation."
        />
      </Helmet>

      <Container className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Articles
          </h1>
          <p className="text-xl text-gray-600">
            Discover all our latest articles and tutorials
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="p-6 space-y-3">
                  <div className="bg-gray-200 h-4 rounded"></div>
                  <div className="bg-gray-200 h-4 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts?.map((post, index) => (
                <React.Fragment key={post.id}>
                  <PostCard post={post} />
                  {/* Insert ad after 3rd post */}
                  {index === 2 && (
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center my-8">
                      <AdUnit
                        slotId="6811698811"
                        format="fluid"
                        layoutKey="-fb+5w+4e-db+86"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Blog;
