import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calculatePath } from '../../Utils';
import header from './Header.scss';
import Tab from './Tab';

function Menu(props) {
  const {
    tabNames,
    briefStatus,
  } = props;
  return (
    <menu className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                route={`${calculatePath(briefStatus)}`}
                key={tabName}
              />
            );
          },
        )
      }
    </menu>
  );
}

const mapStateToProps = (state) => (
  {
    page: state.status.UIpage,
    cardsNum: state.cardsNum,
    briefStatus: {
      section: state.status.section,
      page: state.status.UIpage,
      cardsNum: state.cardsNum[state.status.section],
      year: state.movie.year,
      genre: state.movie.genre,
      rating: state.movie.rating,
    },
  }
);

export default connect(mapStateToProps, null)(Menu);

Menu.propTypes = {
  tabNames: PropTypes.array,
  briefStatus: PropTypes.object,
};

Menu.defaultProps = {
  briefStatus: {},
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
};
