import { useEffect } from "react"
import incrementViews from "../lib/increment-views"

const Counter = ({ id }) => {
  useEffect(() => {
    incrementViews(id)
  }, [id])

  return null
}

export default Counter
