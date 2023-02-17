import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  padding-top: 20px;
  margin: 20px auto;
  max-width: 600px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
`;
export const Title = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  color: gray;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font-family: Oxygen;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  padding: 0;
  margin: auto;
  list-style: none;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8ef;
  text-align: center;
  width: 120px;
  padding: 20px;
  background-color: gray;
`;

export const StatLabel = styled.span`
  font-size: 30px;
  margin-bottom: 8px;
  color: white;
`;
export const StatPercentage = styled.span`
  display: block;
  font-weight: 700;
  color: white;
`;
