import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import { formatDate } from '../../utils/formatDate'

const PostCard = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blogs/${post.id}`}>
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(post.publishedAt)}</span>
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
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{post.author.name}</span>
          </div>
          
          <Link 
            to={`/blogs/${post.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Read more →
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default PostCard