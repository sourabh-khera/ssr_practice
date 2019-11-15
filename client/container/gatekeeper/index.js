import React, { Component, Fragment } from 'react';
import UnAuthRoutes from '../routes/unauth_routes';

class GateKeeper extends Component {
	render() {
    return (
			<Fragment>
				<UnAuthRoutes />
			</Fragment>
		);
	}
}

export default GateKeeper;