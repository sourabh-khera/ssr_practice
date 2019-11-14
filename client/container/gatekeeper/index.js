import React, { Component } from 'react';
import UnAuthRoutes from '../routes/unauth_routes';

class GateKeeper extends Component {
	render() {
    return (
			<div>
				<UnAuthRoutes />
			</div>
		);
	}
}

export default GateKeeper;