import { Children, FC } from 'react';
import { List } from 'components/list';
import { SectionContainer } from 'components/section-container';
import { Experience } from 'data/types';
import { ExperienceRow } from './components/row';

type PortfolioSectionProps = {
  portfolio: Experience[];
};

const PortfolioSection: FC<PortfolioSectionProps> = ({ portfolio }) => {
  return (
    <SectionContainer id="portfolio" heading="My Portfolio">
      <List type="rectangle">
        {Children.toArray(portfolio.map(ExperienceRow))}
      </List>
    </SectionContainer>
  );
};

export default PortfolioSection;
