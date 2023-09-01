import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid limegreen;
  border-radius: 7px;
  padding: 0 20px;
`;

export const ContactText = styled.p`
  font-size: 20px;
  margin: 10px;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  background-color: limegreen;
  border-radius: 7px;
  border: none;
  font-weight: 600;
  color: white;
`;
