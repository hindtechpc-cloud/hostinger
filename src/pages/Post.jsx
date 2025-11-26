import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Container from '../components/UI/Container'
import PostContent from '../components/Blog/PostContent'
import RelatedPosts from '../components/Blog/RelatedPosts'
import Spinner from '../components/UI/Spinner'
import { useFetch } from '../hooks/useFetch'
import { generateSEO } from '../utils/seo'

const Post = () => {
  const { id } = useParams()
  const { data: post, loading } = useFetch(`/blogs/${id}`)

  console.log(post)

  if (loading) {
    return (
      <Container className="py-8">
        <Spinner size="large" />
      </Container>
    )
  }

  if (!post) {
    return (
      <Container className="py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
      </Container>
    )
  }

  const seoConfig = {
    title: post.title,
    description: post.excerpt,
    url: `${window.location.origin}/blogs/${post.id}`,
    image: post.image,
    type: 'article',
    publishedTime: post.publishedAt,
    author: post.author?.name || "Unknown"
  }

  return (
    <>
      {/* <Helmet> */}
        {/* FIXED: generateSEO array is spread correctly */}
        {/* {generateSEO(seoConfig).map((tag, index) => (
          <React.Fragment key={index}>{tag}</React.Fragment>
        ))}
      </Helmet> */}

      <Container className="py-8">
        <PostContent post={post} />
        <RelatedPosts currentPost={post}  />
      </Container>
    </>
  )
}

export default Post
