import React, { useEffect, useRef } from 'react'
import AdUnit from '../Adsense/AdUnit'
import { initializeAds } from '../Adsense/AdUnit'
import AuthorBio from './AuthorBio'

const PostContent = ({ post }) => {
  const contentRef = useRef(null)
  const adInsertedRef = useRef(false)

  useEffect(() => {
    // Insert ad after second paragraph
    if (contentRef.current && !adInsertedRef.current) {
      const paragraphs = contentRef.current.querySelectorAll('p')
      if (paragraphs.length >= 2) {
        const adContainer = document.createElement('div')
        adContainer.className = 'my-8 flex justify-center'
        adContainer.innerHTML = `
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="${import.meta.env.VITE_ADSENSE_CLIENT_ID}"
               data-ad-slot="in_content_ad"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        `
        
        paragraphs[1].parentNode.insertBefore(adContainer, paragraphs[1].nextSibling)
        adInsertedRef.current = true
        
        // Initialize the ad
        if (window.adsbygoogle) {
          window.adsbygoogle.push({})
        }
      }
    }
  }, [])

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-4">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm">
              {new Date(post.publishedAt).toLocaleDateString()} • {post.readTime} min read
            </div>
          </div>
        </div>
        
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </header>

      <div 
        ref={contentRef}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Ad after content */}
      <div className="my-8 flex justify-center">
        <AdUnit 
          slotId="8353679491"
          format="auto"
          responsive={true}
        />
      </div>

      <AuthorBio author={post.author} />
    </article>
  )
}

export default PostContent