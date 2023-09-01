import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 10px 0;
  font-size: 25px;
`;

export const FormInput = styled.input`
  height: 40px;
  margin-top: 10px;
  border-radius: 7px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  width: 150px;
  font-size: 15px;
  background-color: limegreen;
  border-radius: 7px;
  border: none;
  font-weight: 600;
  color: white;
`;
