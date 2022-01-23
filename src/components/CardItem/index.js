// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
