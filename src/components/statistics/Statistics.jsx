import PropTypes from 'prop-types';
import { getRandomHexColor } from '../utils/getRandomHexColor';
import {
  Section,
  Title,
  List,
  ListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(statsItem => (
          <ListItem
            key={statsItem.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{statsItem.label}</StatLabel>
            <StatPercentage>{statsItem.percentage}%</StatPercentage>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
