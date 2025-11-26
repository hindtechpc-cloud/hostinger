import React, { useState } from 'react';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: '/assets/default-avatar.png',
      content: 'This is a great article! Very informative and well-written.',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: '/assets/default-avatar.png',
      content: 'Thanks for sharing these insights. Looking forward to more content like this.',
      timestamp: '2024-01-14T15:45:00Z'
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.content.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    const comment = {
      id: comments.length + 1,
      author: newComment.name,
      avatar: '/assets/default-avatar.png',
      content: newComment.content,
      timestamp: new Date().toISOString()
    };

    setComments(prev => [comment, ...prev]);
    setNewComment({ name: '', email: '', content: '' });
    
    alert('Comment submitted successfully!');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Leave a Comment</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newComment.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Comment *
            </label>
            <textarea
              id="content"
              name="content"
              value={newComment.content}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share your thoughts..."
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start space-x-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                  <span className="text-sm text-gray-500">
                    {formatDate(comment.timestamp)}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;