import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import mainStyles from './Main.scss';
import makePayload from './makePayload';

import Request from './Request';
import {
  addResults,
  addAllGenres,
  showDetails,
  addUIPageNum,
} from '../../redux/actions';

import Card from '../Card';
import Details from '../Details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      details: {},
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const { addAllGenres, addResults, match } = this.props;
    console.log('match 1', match);
    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);

    const { allProps } = this.props;
    const payload = await makePayload(allProps);

    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      match,
      allProps,
      updateCounter,
      detailsId,
      addResults,
      showDetails,
    } = this.props;
    console.log('match 2', match);

    if (prevProps.updateCounter !== updateCounter) {
      const payload = await makePayload(allProps);
      addResults(payload.totalResults);
      this.updateState('items', payload.items);
    }

    if (prevProps.detailsId !== detailsId) {
      const details = await this.request.getDetails(detailsId);
      this.updateState('details', details);
      showDetails(true);
    }
  }

  updateState = (stateName, items) => {
    this.setState({
      [stateName]: items,
    });
  }

  render() {
    const { detailsTab } = this.props;
    const { items, details } = this.state;
    if (details.id && detailsTab) {
      return (
        <Details item={details} />
      );
    }
    return (
      <main className={mainStyles.pageBody}>
        {items.map((item) => {
          return (
            <Card key={item.id} item={item} />
          );
        })}
      </main>
    );
  }
}

const mapStateToProps = (state) => (
  {
    allProps: state,
    detailsTab: state.status.detailsTab,
    detailsId: state.detailsId,
    updateCounter: state.status.updateCounter,
  }
);

export default connect(mapStateToProps, {
  addResults,
  addAllGenres,
  showDetails,
  addUIPageNum,
})(Main);

Main.propTypes = {
  match: PropTypes.object,
  allProps: PropTypes.object,
  updateCounter: PropTypes.number,
  detailsId: PropTypes.number,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
  showDetails: PropTypes.func,
  detailsTab: PropTypes.bool,
};

Main.defaultProps = {
  match: {},
  detailsTab: false,
  allProps: {},
  updateCounter: 0,
  detailsId: 0,
  addResults: () => { },
  addAllGenres: () => { },
  showDetails: () => { },
};
