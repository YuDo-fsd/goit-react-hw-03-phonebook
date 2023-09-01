import React from 'react';
import PropTypes from 'prop-types';
import css from './contactlist.module.css';

const ContactList = ({ filteredUserList, onDeleteUser }) => {
  return (
    <ul className={css.contactList}>
      {filteredUserList.map(({ id, name, number }) => {
        return (
          <li className={css.contactList__item} key={id}>
            <div>
              <p className={css.contactList__text}>{name}</p>
              <p className={css.contactList__text}>{number}</p>
            </div>
            <button
              className={css.contactList__button}
              type="button"
              onClick={() => onDeleteUser(id)}
            >
              Delete Contact
            </button>
          </li>
        );
      })}
    </ul>
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
