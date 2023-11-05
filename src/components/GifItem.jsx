import PropTypes from 'prop-types'

export const GifItem = ({ tittle, url }) => {

  return (
      <div className="card">
        <img src={ url } alt={ tittle } />
        <p>{ tittle }</p>
      </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
}