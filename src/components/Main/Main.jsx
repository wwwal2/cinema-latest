import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bodyStyles from './bodyStyles.css';

import Request from '../Request';
import * as genres from './genres.json';

import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.request = new Request();
  }

  componentDidMount() {
    const { readRating } = this.props;
    this.request.getByRating(Number(readRating)).then((data) => {
      this.setState({
        isLoaded: true,
        items: data.results,
      });
    });
    console.log(genres.default.find((genre) => genre.name === 'Action'), readRating);
  }

  componentDidUpdate(prevProps) {
    const { readRating, trigger } = this.props;
    if (prevProps.trigger !== trigger) {
      this.request.getByRating(Number(readRating)).then((data) => {
        this.setState({
          isLoaded: true,
          items: data.results,
        });
      });
    }
  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <div className={bodyStyles.pageBody}>
          {items.map((item) => {
            return (
              <Card key={item.id} item={item} />
            );
          })}
        </div>
      );
    }
    return (
      <h1>
        MAIN
      </h1>
    );
  }
}

const mapStateToProps = (state) => (
  {
    readRating: state.rating,
    trigger: state.trigger,
  }
);

export default connect(mapStateToProps, null)(Main);

Main.propTypes = {
  readRating: PropTypes.string,
  trigger: PropTypes.bool,
};

Main.defaultProps = {
  readRating: '',
  trigger: true,
};
