import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {post.image && (
            <div className="md:w-48 md:flex-shrink-0">
              <Link to={`/blogs/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 md:h-36 object-cover rounded-lg"
                />
              </Link>
            </div>
          )}
          
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min read</span>
            </div>
            
            <Link to={`/blogs/${post.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 line-clamp-2">
                {post.title}
              </h3>
            </Link>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {post.author.avatar && (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-8 w-8 rounded-full mr-3"
                  />
                )}
                <span className="text-sm font-medium text-gray-700">
                  {post.author.name}
                </span>
              </div>
              
              <Link
                to={`/blogs/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostListItem;