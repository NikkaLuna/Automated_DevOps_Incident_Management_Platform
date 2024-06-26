import React from 'react';

class CreateResourceForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('/create-resource/', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      this.props.onResourceCreated(data);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Add form fields here */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CreateResourceForm;
