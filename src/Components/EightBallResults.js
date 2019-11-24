import React from "react";
import EightBallCard from "./EightBallCard";

export default class EightBallResults extends React.Component {
	render() {
		return (
			<div>
				<EightBallCard
					question={this.props.question}
					answer={this.props.answer}
					response={this.props.response}
				/>
			</div>
		);
	}
}
