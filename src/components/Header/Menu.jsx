import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routes } from '../../constants';
import header from './Header.scss';
import Tab from './Tab';

function Menu(props) {
  const { tabNames, page, cardsNum } = props;

  return (
    <menu className={header.menuContainer}>
      {
        tabNames.map(
          (tabName) => {
            return (
              <Tab
                tabName={tabName}
                route={`${routes[tabName.toLowerCase()]}/${page}/${cardsNum[tabName.toLowerCase()]}`}
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
  }
);

export default connect(mapStateToProps, null)(Menu);

Menu.propTypes = {
  tabNames: PropTypes.array,
  page: PropTypes.number,
  cardsNum: PropTypes.object,
};

Menu.defaultProps = {
  page: 0,
  cardsNum: {},
  tabNames: [
    'Main',
    'Popular',
    'Favorite',
  ],
};
