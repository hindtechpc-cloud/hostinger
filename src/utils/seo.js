export const generateSEO = (config) => {
  const {
    title,
    description,
    url,
    image,
    type = 'website',
    publishedTime,
    author
  } = config

  const tags = [
    { title: `${title} - Your Blog` },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { rel: 'canonical', href: url }
  ]

  if (type === 'article') {
    tags.push(
      { property: 'article:published_time', content: publishedTime },
      { property: 'article:author', content: author }
    )
  }

  return tags
}