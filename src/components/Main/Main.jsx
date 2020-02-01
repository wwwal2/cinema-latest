import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import mainStyles from './Main.css';

import Request from './Request';
import makePayload from './makePayload';
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

    const { requestProps } = this.props;
    const payload = await makePayload(requestProps);
    addResults(payload.totalResults);
    this.updateState('items', payload.items);
  }

  async componentDidUpdate(prevProps) {
    const { updateCounter, detailsId, requestProps } = this.props;
    if (prevProps.updateCounter !== updateCounter) {
      const payload = await makePayload(requestProps);
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
    if (!isDetails) {
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
    return (
      <Details item={details} exitDetails={this.toggleDetails} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    requestProps: {
      main: state.main,
      UIpage: state.UIpage,
      year: state.year,
      rating: state.rating,
      genre: state.genre,
      allGenres: state.allGenres,
    },

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
  updateCounter: PropTypes.number,
  detailsId: PropTypes.number,
  requestProps: PropTypes.object,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
};

Main.defaultProps = {
  updateCounter: 0,
  detailsId: 0,
  requestProps: {},
  addResults: () => { },
  addAllGenres: () => { },
};
