import React from 'react';

class ChildComponent extends React.Component {

  constructor(props) {
    super(props);

    // Bind the event handler so 'this' refers to the component inside the method
    this.handleClick = this.handleClick.bind(this);
  }

  // Calls the parent's onAction method, passing up this pet's id
  handleClick() {
    this.props.onAction(this.props.id);
  }

  render() {
    // Destructure all needed props from this.props for cleaner JSX below
    const { name, image, status } = this.props;

    const isHappy = status === 'happy';

    return (
      <div
        className="child-card"
        style={{
          border: '2px solid #ccc',
          borderRadius: '12px',
          padding: '20px',
          width: '200px',
          textAlign: 'center',
          backgroundColor: isHappy ? '#e6ffe6' : '#fff0f0',
          transition: 'background-color 0.3s ease'
        }}
      >
        {/* 1. Pet name as the card header */}
        <h2 style={{ marginBottom: '10px' }}>{name}</h2>

        {/* 2. Pet image — switches between happy and sad based on status */}
        <img
          src={image}
          alt={`${name} is ${status}`}
          style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
        />

        {/* 3. Current status displayed below the image */}
        <p style={{ margin: '10px 0', fontWeight: 'bold', color: isHappy ? 'green' : 'red' }}>
          {isHappy ? '😊 Happy' : '😢 Sad'}
        </p>

        {/* 4. Button fires handleClick, which calls the parent's onAction method */}
        <button
          onClick={this.handleClick}
          style={{
            marginTop: '8px',
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isHappy ? '#4caf50' : '#f44336',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          {isHappy ? '🎾 Play Again' : '🍖 Feed Pet'}
        </button>
      </div>
    );
  }
}

export default ChildComponent;
