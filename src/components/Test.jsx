import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
	const { name } = props;
	return <div>
		hi {name}
	</div>;

}

Header.propTypes = {
	name: PropTypes.string
};
