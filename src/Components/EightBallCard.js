import React from "react";

export default class EightBallCard extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="content">
					<p className="has-text-centered">{this.props.question}</p>
					<p className="has-text-centered">{this.props.answer}</p>
				</div>
                <div className="content">
                    <p className="has-text-centered">
                        
                    </p>
                </div>
			</div>
		);
	}
}
