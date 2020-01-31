import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import mainStyles from './Main.css';

import Request from './Request';
// import Utility from '../Utility';
import makePayload from './makePayload';
import * as actions from '../../redux/actions';
// import { apiResultsPerPage } from '../../constants';

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
    // .then((res) => {
    //   addAllGenres(res.genres);
    //   return makePayload(this.props);
    // })
    // .then((payload) => {
    //   this.setState({
    //     items: payload.items,
    //   });
    //   addResults(payload.totalResults);
    // });
  }

  // componentDidUpdate(prevProps) {
  //   const { updateCounter, detailsId } = this.props;
  //   if (prevProps.updateCounter !== updateCounter) {
  //     this.makePayload();
  //   }
  //   if (prevProps.detailsId !== detailsId) {
  //     this.showDetails(detailsId);
  //   }
  // }

  toggleDetails = () => {
    const { isDetails } = this.state;
    this.setState({
      isDetails: !isDetails,
    });
  }

  async showDetails(id) {
    const details = await this.request.getDetails(id);
    console.log(details);
    this.setState({
      isDetails: true,
      details,
    });
  }

  render() {
    const { isDetails, items, details } = this.state;
    console.log(isDetails);
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
    readYear: state.year,
    readRating: state.rating,
    readGenre: state.genre,
    allGenres: state.allGenres,
    readTotalResults: state.totalResults,
    detailsId: state.detailsId,
    updateCounter: state.updateCounter,
    main: state.main,
    UIpage: state.UIpage,
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
  // readYear: PropTypes.string,
  // readRating: PropTypes.string,
  // readGenre: PropTypes.string,
  // updateCounter: PropTypes.number,
  // main: PropTypes.number,
  // detailsId: PropTypes.number,
  addAllGenres: PropTypes.func,
  addResults: PropTypes.func,
  // UIpage: PropTypes.number,
  // allGenres: PropTypes.array,
};

Main.defaultProps = {
  // readYear: '',
  // readRating: '',
  // readGenre: '',
  // updateCounter: 0,
  // detailsId: 0,
  // main: 0,
  // UIpage: 0,
  // allGenres: [],
  addResults: () => { },
  addAllGenres: () => { },
};
