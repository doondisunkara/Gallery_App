import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateGalleryImgId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const updateGallery = () => {
    updateGalleryImgId(id)
  }
  return (
    <li className="thumbnail-container">
      <button type="button" className="thumbnail" onClick={updateGallery}>
        <img
          className="thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
