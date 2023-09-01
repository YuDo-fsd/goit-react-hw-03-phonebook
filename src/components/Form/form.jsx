import { Component } from 'react';
import css from './form.module.css';

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
      <form className={css.form} onSubmit={this.onHandleSubmit}>
        <label className={css.form__label}>
          Name
          <input
            className={css.form__input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Ivan, Ivan Ivanov, Sydoruk Ivan"
            onChange={this.onHandleInput}
            required
          />
        </label>
        <label className={css.form__label}>
          Phone
          <input
            className={css.form__input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.onHandleInput}
            required
          />
        </label>
        <button className={css.form__button}>Add Contact</button>
      </form>
    );
  }
}

NewContactForm.propTypes = {};
