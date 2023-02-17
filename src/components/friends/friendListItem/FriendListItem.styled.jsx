import styled from 'styled-components';

export const FriendStatus = styled.span`
  height: 40px;
  width: 40px;
  background-color: ${props => {
    // console.log(props);
    return props.isOnline ? `green` : `red`;
  }};
  border-radius: 50%;
  display: inline-block;
`;

export const FriendAvatar = styled.img`
  display: block;
  border: 1px solid gray;
  border-radius: 5%;
  width: 150px;
`;

export const FriendName = styled.p`
  font-weight: 500;
`;
