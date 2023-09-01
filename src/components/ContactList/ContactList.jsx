import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, ContactText, DeleteButton } from './ContactList.styled';

const ContactList = ({ filteredUserList, onDeleteUser }) => {
  return (
    <List>
      {filteredUserList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <div>
              <ContactText>{name}</ContactText>
              <ContactText>{number}</ContactText>
            </div>
            <DeleteButton type="button" onClick={() => onDeleteUser(id)}>
              Delete Contact
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filteredUserList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};

export default ContactList;
