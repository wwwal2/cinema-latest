import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as genres from '../../Main/genres.json';
import TopButtons from './TopButtons';
import YearFilter from './YearFilter';
import Select from './Select';

class FilterPayload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rating, readTheStore } = this.props;
    console.log(readTheStore);
    return (
      <div>
        <TopButtons />
        <YearFilter />
        <div>
          <div>Genres</div>
          <Select selectProps={readTheStore} genres={genres.default} />
        </div>
        <div>
          <div>Rating</div>
          <Select selectProps={readTheStore} rating={rating} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { readTheStore: state }
);

export default connect(mapStateToProps, null)(FilterPayload);

FilterPayload.propTypes = {
  rating: PropTypes.array,
  readTheStore: PropTypes.object,
};

FilterPayload.defaultProps = {
  rating: [3, 4, 5, 6, 7, 8, 9],
  readTheStore: {},
};
