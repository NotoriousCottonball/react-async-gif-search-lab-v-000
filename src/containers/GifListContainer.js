import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGIFS} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFS = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  fetchGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.data)
        this.setState({ gifs: data.data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }


  componentDidMount() {
     this.fetchGIFS()
  }

 }
