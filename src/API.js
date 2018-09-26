import React from 'react'
import { ColorExtractor } from 'react-color-extractor'
import src from './mountain.png'

class ImgPalette extends React.Component {
  state = { colors: [] }

  renderSwatches = () => {
    const { colors } = this.state

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
  }

  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))

  render() {
    return (
      <div>
        <ColorExtractor getColors={this.getColors}>
          <img
            src={src}
            style={{ width: 700, height: 500 }}
          />
        </ColorExtractor>
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {this.renderSwatches()}
        </div>
      </div>
    )
  }
}

export default ImgPalette