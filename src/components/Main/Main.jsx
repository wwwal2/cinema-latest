import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import mainStyles from './Main.scss';
import makePayload from './makePayload';

import Request from './Request';
import * as actions from '../../redux/actions';

import Card from '../Card';
import Details from '../Details';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      details: {},
      isDetails: false,
    };
    this.request = new Request();
  }

  async componentDidMount() {
    const { addAllGenres, addResults } = this.props;
    const genres = await this.request.getGenres();
    addAllGenres(genres.genres);

    const { reduxProps } = this.props;
    const payload = await makePayload(reduxProps);

    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const {
      reduxProps,
      updateCounter,
      detailsId,
      addResults,
    } = this.props;

    if (prevProps.updateCounter !== updateCounter) {
      const payload = await makePayload(reduxProps);
      addResults(payload.totalResults);
      this.updateState('items', payload.items);
    }

    if (prevProps.detailsId !== detailsId) {
      const details = await this.request.getDetails(detailsId);
      this.updateState('details', details);
      this.updateState('isDetails', true);
    }
  }


  toggleDetails = () => {
    const { isDetails, details } = this.state;
    if (details.id) {
      this.updateState('isDetails', !isDetails);
    }
  }

  updateState = (stateName, items) => {
    this.setState({
      [stateName]: items,
    });
  }

  render() {
    const { isDetails, items, details } = this.state;
    if (isDetails) {
      return (
        <Details item={details} exitDetails={this.toggleDetails} />
      );
    }
    return (
      <div className={mainStyles.pageBody}>
        {items.map((item) => {
          return (
            <Card key={item.id} item={item} stepInDetails={this.toggleDetails} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    reduxProps: state,
    detailsId: state.detailsId,
    updateCounter: state.updateCounter,
  }
);

const mapDispatchToProps = (dispatch) => {
  const { addResults, addAllGenres } = bindActionCreators(actions, dispatch);
  return {
    addResults: (payload) => addResults(payload),
    addAllGenres: (payload) => addAllGenres(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  reduxProps: PropTypes.object,
  updateCounter: PropTypes.number,
  detailsId: PropTypes.number,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
};

Main.defaultProps = {
  reduxProps: {},
  updateCounter: 0,
  detailsId: 0,
  addResults: () => { },
  addAllGenres: () => { },
};
