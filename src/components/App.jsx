import { Component } from 'react';
import { nanoid } from 'nanoid';
import { NewContactForm } from './Form/form';
import Filter from './Filter/filter';
import ContactList from './ContactList';
import css from 'app.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewUser = ({ name, number }) => {
    const user = {
      id: nanoid(),
      name,
      number,
    };

    const existingUser = this.state.contacts.find(
      ({ name }) => name === user.name
    );

    if (existingUser) {
      alert(`${user.name} is already exist`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  onFilterInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(e =>
      e.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteUser = uid => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => uid !== id),
    }));
  };

  render() {
    return (
      <div>
        <div className={css.container}>
          <h1 className={css.title}>Phonebook</h1>
          <NewContactForm onSubmit={this.addNewUser} />
        </div>
        <div className={css.container}>
          <h2 className={css.title}>Contacts</h2>
          <Filter
            onChange={this.onFilterInputChange}
            value={this.state.filter}
          />
          <ContactList
            filteredUserList={this.getFilteredContacts()}
            onDeleteUser={this.handleDeleteUser}
          />
        </div>
      </div>
    );
  }
}
