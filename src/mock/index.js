import { blogs } from "../services/data"


// Fake API router
export const mockApi = (url) => {
  if (url === "/blogs") return blogs
  if (url.startsWith("/blogs/")) {
    const id = url.split("/")[2]
    return blogs.find((b) => b.id === id)
  }

  return null
}
