// import { useState, useEffect } from 'react'

// export const useFetch = (url) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         // In a real app, this would be an actual API call
//         // For now, we'll simulate with mock data
//         const response = await fetch(`https://developerapis.vercel.app/api${url}`)
//         const result = await response.json()
//         console.log(result)
//         setData(result)
//       } catch (err) {
//         setError(err.message)
//         console.log(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [url])

//   return { data, loading, error }
// }




import { useState, useEffect } from "react"
import { mockApi } from "../mock"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Local mock API response
        const result = mockApi(url)

        if (!result) {
          throw new Error("Invalid URL: No mock data found")
        }

        // Simulate delay (optional)
        await new Promise((res) => setTimeout(res, 300))

        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
