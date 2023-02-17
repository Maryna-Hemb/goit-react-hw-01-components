import styled from 'styled-components';

export const UserProfile = styled.div`
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 10px;
  max-width: 600px;
  margin-bottom: 60px;
`;

export const UserDescription = styled.div`
  background-color: white;
  margin: auto;
  padding: 30px;
  text-align: center;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #e2e8ef;
  width: 200px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const UserTag = styled.p`
  color: #aeb5bc;
`;

export const UserLocation = styled.p`
  color: #aeb5bc;
`;

export const UserStats = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  padding: 0;
  margin: auto;
  list-style: none;
  justify-content: center;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8ef;
  text-align: center;
  width: 250px;
  padding: 30px;
`;

export const UserLabel = styled.span`
  font-size: 30px;
  color: #aeb5bc;
  margin-bottom: 8px;
`;
export const UserQuantity = styled.span`
  font-weight: 700;
`;
