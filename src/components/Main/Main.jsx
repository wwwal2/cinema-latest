import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import makePayload from './makePayload';
import { decodePath } from '../../Utils';

import Request from './Request';
import {
  addResults,
  addAllGenres,
  showDetails,
  addUrlData,
} from '../../redux/actions';

import Payload from './Payload';
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
    const {
      addAllGenres,
      addResults,
      addUrlData,
      location: { search },
    } = this.props;

    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);
    addUrlData(decodePath(search));

    const { allProps } = this.props;

    const payload = await makePayload(allProps);
    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      allProps,
      updateCounter,
      detailsId,
      addResults,
      showDetails,
    } = this.props;


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
    return (
      (details.id && detailsTab)
        ? (<Details item={details} />)
        : (<Payload items={items} />)
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
  addUrlData,
})(Main);

Main.propTypes = {
  location: PropTypes.object,
  allProps: PropTypes.object,
  updateCounter: PropTypes.number,
  detailsId: PropTypes.number,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
  showDetails: PropTypes.func,
  detailsTab: PropTypes.bool,
  addUrlData: PropTypes.func,
};

Main.defaultProps = {
  location: {},
  detailsTab: false,
  allProps: {},
  updateCounter: 0,
  detailsId: 0,
  addResults: () => { },
  addAllGenres: () => { },
  showDetails: () => { },
  addUrlData: () => { },
};
