import React from 'react'
import PropTypes from 'prop-types'
import { ArtistPageTemplate } from '../../templates/artist-page'

const ArtistPagePreview = ({ entry }) => (
  <ArtistPageTemplate
    title={entry.getIn(['title'])}
  />
)

ArtistPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ArtistPagePreview
