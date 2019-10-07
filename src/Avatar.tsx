import PropTypes from 'prop-types'
import styled from 'styled-components'
import {get} from './constants'
import {space} from 'styled-system'
import * as systemPropTypes from '@styled-system/prop-types'
import theme from './theme'
import {AvatarProps} from '@primer/components'

function borderRadius({size}: {size: number}) {
  return {
    borderRadius: size <= 24 ? '2px' : '3px'
  }
}

const Avatar = styled.img.attrs<AvatarProps>(props => ({
  height: props.size,
  width: props.size
}))`
  display: inline-block;
  overflow: hidden; // Ensure page layout in Firefox should images fail to load
  line-height: ${get('lineHeights.condensedUltra')};
  vertical-align: middle;
  ${borderRadius};
  ${space};
`

Avatar.defaultProps = {
  theme,
  size: 20,
  alt: ''
}

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
  src: PropTypes.string,
  ...systemPropTypes.space,
  theme: PropTypes.object
}

export default Avatar
