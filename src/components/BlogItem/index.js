import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  console.log(title)
  return (
    <li className="list-item">
      <div className="title-and-date-container">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="under-line" />
    </li>
  )
}

export default BlogItem
