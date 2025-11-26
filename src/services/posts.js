import { get } from './api';

// Cache for posts data
let postsCache = null;
let postsCacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Check if cache is valid
const isCacheValid = () => {
  return postsCache && postsCacheTime && (Date.now() - postsCacheTime < CACHE_DURATION);
};

// Fetch all posts
export const fetchPosts = async (options = {}) => {
  const { useCache = true, page = 1, limit = 10 } = options;
  
  // Return cached data if valid and cache is enabled
  if (useCache && isCacheValid()) {
    return postsCache;
  }

  try {
    const params = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
      _sort: 'publishedAt',
      _order: 'desc'
    });

    const posts = await get(`/posts?${params}`);
    
    // Update cache
    if (useCache) {
      postsCache = posts;
      postsCacheTime = Date.now();
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch a single post by slug
export const fetchPostBySlug = async (slug) => {
  try {
    const posts = await get('/posts');
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      throw new Error(`Post with slug "${slug}" not found`);
    }
    
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw error;
  }
};

// Fetch featured posts
export const fetchFeaturedPosts = async (limit = 6) => {
  try {
    const posts = await get('/posts');
    return posts
      .filter(post => post.featured)
      .slice(0, limit)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    throw error;
  }
};

// Fetch related posts
export const fetchRelatedPosts = async (currentPost, limit = 3) => {
  try {
    const posts = await get('/posts');
    return posts
      .filter(post => 
        post.id !== currentPost.id && 
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    throw error;
  }
};

// Search posts
export const searchPosts = async (query) => {
  try {
    const posts = await get('/posts');
    const lowerQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  } catch (error) {
    console.error('Error searching posts:', error);
    throw error;
  }
};

// Clear posts cache
export const clearPostsCache = () => {
  postsCache = null;
  postsCacheTime = null;
};