import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    }
    handleIndexClick = (index) => {
      this.setState({
        active: index
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
                            key={photo}
                            onClick={this.handleIndexClick.bind(this, index)}
                            // data-index={index}
                            src={photo}
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