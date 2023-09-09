import { Component } from 'react';
import { nanoid } from 'nanoid';
import { NewContactForm } from './Form/form';
import Filter from './Filter/filter';
import ContactList from '../components/ContactList/ContactList';
import { AppContainer, AppTitleFirst, AppTitleSecond } from './app.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
        <AppContainer>
          <AppTitleFirst>Phonebook</AppTitleFirst>
          <NewContactForm onSubmit={this.addNewUser} />
        </AppContainer>
        <AppContainer>
          <AppTitleSecond>Contacts</AppTitleSecond>
          <Filter
            onChange={this.onFilterInputChange}
            value={this.state.filter}
          />
          <ContactList
            filteredUserList={this.getFilteredContacts()}
            onDeleteUser={this.handleDeleteUser}
          />
        </AppContainer>
      </div>
    );
  }
}
