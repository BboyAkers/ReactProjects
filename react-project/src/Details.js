import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
class Details extends Component {
  constructor(props) {
    super(props);

    state = {
      loading: true
    };
  }
  componentDidMount() {
    pet.animals(this.props.id).then(({ animal}) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      })
    })
  }
    render () {
      if(state.loading) {
        return <h1>loading....</h1>
      }

      const { animal, breed, location, description, name} = state;

      return (
        <div className="details">
          <div>
            <h2>{name}</h2>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      )
    }
}
// const Details = props => {
//     return (
//         <pre>
//             <code>{JSON.stringify(props, null, 4)}</code>
//         </pre>
//     )
// }

export default Details;