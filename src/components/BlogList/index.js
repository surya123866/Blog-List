import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-list-container">
      <ul className="list-container">
        {blogsList.map(eachBlogItem => (
          <BlogItem blogDetails={eachBlogItem} key={eachBlogItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
