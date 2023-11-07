import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])

    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext