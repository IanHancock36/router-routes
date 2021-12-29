import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from "../hooks/useFetch"
const Article = () => {
  const { id } = useParams()
 const url = "http://localhost:3000/articles/" + id
  
  return (
        <div>
      
        </div>
    )
}

export default Article
