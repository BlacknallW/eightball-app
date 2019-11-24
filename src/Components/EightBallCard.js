import React from "react";
import uuid from "uuid/v4"

export default class EightBallCard extends React.Component {
	render() {
		const responses = this.props.response.map(response => {
			return <div key={uuid()}>
                {response}
                </div>;
		});
		return (
			<div className="section">
				<div className="content">
					<p className="has-text-centered">{this.props.question}</p>
					<p className="has-text-centered">{this.props.answer}</p>
				</div>
				<div className="content">
					<div className="tile is-ancestor box">
						<div className="tile is-parent">
							<div className="tile is-child">
								<p className="title has-text-centered">Response Log</p>
								{responses}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
