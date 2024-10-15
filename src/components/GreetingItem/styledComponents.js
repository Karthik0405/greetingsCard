import styled from 'styled-components'

export const ListItem = styled.li``

export const Button = styled.button`
  outline: none;
  border: 1px solid #db1c48;
  cursor: pointer;
  border-radius: 30px;
  height: 40px;
  width: 90px;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  font-family: Roboto;
  font-weight: 600;
`
