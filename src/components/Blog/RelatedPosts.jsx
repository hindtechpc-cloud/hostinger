import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetch } from "../../hooks/useFetch";

const PAGE_SIZE = 6;

const SkeletonCard = () => (
  <div className="bg-gray-100 animate-pulse rounded-lg p-4">
    <div className="w-full h-40 bg-gray-300 rounded mb-3"></div>
    <div className="h-4 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
  </div>
);

const RelatedPosts = ({ currentPost }) => {
  const tags = currentPost?.meta?.tags || [];

  // Fetch all posts
  const { data: featuredPosts, loading } = useFetch("/blogs");

  // 🔥 Derive related posts without useEffect (React recommended)
  const related = useMemo(() => {
    if (loading || !featuredPosts) return [];

    return featuredPosts
      .filter((p) => p.id !== currentPost.id)
      .filter((p) => p.meta?.tags?.some((tag) => tags.includes(tag)));
  }, [loading, featuredPosts, currentPost.id, tags]);

  // Infinite scroll states
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visible = related.slice(0, visibleCount);
  const hasMore = visibleCount < related.length;

  // Load more on scroll
  const fetchMoreData = () => {
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
    }, 800);
  };

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h2>

      <InfiniteScroll
        dataLength={visible.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        }
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((post) => (
          <article
            key={post.id}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
          >
            <Link to={`/blogs/${post.id}`}>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="rounded-md mb-3 w-full h-40 object-cover"
              />

              <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
                {post.title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-gray-600 text-sm line-clamp-2">
                {post.content}
              </p>
            </Link>
          </article>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default RelatedPosts;
