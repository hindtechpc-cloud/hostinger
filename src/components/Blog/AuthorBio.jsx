import React from 'react'
import Card from '../UI/Card'

const AuthorBio = ({ author }) => {
  return (
    <Card className="p-6 mt-8">
      <div className="flex items-start">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="h-16 w-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
          <p className="text-gray-600 mt-1">{author.bio}</p>
          <div className="flex space-x-4 mt-3">
            {author.social?.twitter && (
              <a href={author.social.twitter} className="text-blue-600 hover:text-blue-700">
                Twitter
              </a>
            )}
            {author.social?.github && (
              <a href={author.social.github} className="text-gray-600 hover:text-gray-700">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AuthorBio