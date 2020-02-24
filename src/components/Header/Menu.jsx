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
    movie,
  } = props;
  return (
    <menu className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                route={`${calculatePath(briefStatus, movie)}`}
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
    briefStatus: [
      state.status.section,
      state.status.UIpage,
      state.cardsNum[state.status.section],
    ],
    movie: state.movie,
  }
);

export default connect(mapStateToProps, null)(Menu);

Menu.propTypes = {
  tabNames: PropTypes.array,
  briefStatus: PropTypes.array,
  movie: PropTypes.object,
};

Menu.defaultProps = {
  briefStatus: [],
  movie: {},
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
};
