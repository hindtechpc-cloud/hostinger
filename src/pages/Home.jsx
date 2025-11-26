import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Container from '../components/UI/Container'
import PostCard from '../components/Blog/PostCard'
import AdUnit from '../components/Adsense/AdUnit'
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const { data: featuredPosts, loading } = useFetch('/blogs')

  return (
    <>
      <Helmet>
        <title>Home - Your Blog</title>
        <meta name="description" content="Welcome to our blog featuring the latest articles on technology, programming, and digital innovation." />
      </Helmet>

      <Container> 
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Blog Web page
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the latest insights, tutorials, and trends in technology and programming.
          </p>
          <Link 
            to="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Explore Articles
          </Link>
        </section>

        {/* Featured Posts */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
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
                {featuredPosts?.slice(0, 3).map((post, index) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Ad after first row */}
              <div className="my-12 flex justify-center">
                <AdUnit 
                  slotId="home_mid_ad"
                  format="auto"
                  responsive={true}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {featuredPosts?.slice(3, 6).map((post, index) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </section>
      </Container>
    </>
  )
}

export default Home