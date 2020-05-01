import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    }
    handleIndexClick = (event) => {
      this.setState({
        active: +event.target.dataset.index
      })
    }
    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                      // eslint-disable-next-line
                        <img
                            key={photo.large}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo.large}
                            className={index === active ? "active": ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;