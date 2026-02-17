import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state with pet data imported from data.js
    this.state = {
      characters: initialData
    };
  }

  // Method to handle state changes from children
  // Receives the pet's id, finds it in state, and toggles its image/status
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);

    const updatedCharacters = this.state.characters.map(char => {
      if (char.id === id) {
        // Toggle between happy and sad states
        const isCurrentlyHappy = char.status === 'happy';
        return {
          ...char,
          image: isCurrentlyHappy ? char.sadImage : char.happyImage,
          status: isCurrentlyHappy ? 'sad' : 'happy'
        };
      }
      // All other pets remain unchanged
      return char;
    });

    this.setState({ characters: updatedCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🐾 Pet Kennel Manager</h1>
        <p>Feed your pets and keep them happy!</p>

        <div
          className="children-container"
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}
        >
          {/* Map through state characters and render one ChildComponent card per pet */}
          {this.state.characters.map(char => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              onAction={this.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
