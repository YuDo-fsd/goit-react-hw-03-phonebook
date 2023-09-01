import { Component } from 'react';
import { Form, FormButton, FormInput, FormLabel } from './Form.styled';

export class NewContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Ivan, Ivan Ivanov, Sydoruk Ivan"
            onChange={this.onHandleInput}
            required
          />
        </FormLabel>
        <FormLabel>
          Phone
          <FormInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.onHandleInput}
            required
          />
        </FormLabel>
        <FormButton>Add Contact</FormButton>
      </Form>
    );
  }
}

NewContactForm.propTypes = {};
