import React from "react";
import Axios from "axios";
import EightBallResults from "./Components/EightBallResults";
import "bulma/css/bulma.css"

export default class App extends React.Component {
	state = {
		userInput: "",
		userQuestion: "",
		userAnswer: "",
		userResponse: []
	};

	askEightBall = async question => {
		const res = await Axios.get(
			`https://8ball.delegator.com/magic/JSON/${question}`
		);

		const userQuestion = res.data.magic.question;
		const userAnswer = res.data.magic.answer;
		this.setState({
			userQuestion: userQuestion,
			userAnswer: userAnswer,
			userResponse: [...this.state.userResponse, userQuestion, userAnswer]
		})
		console.log(this.state.userResponse)
		;
	};

	onFormSubmit = async e => {
		e.preventDefault();
		await this.askEightBall(this.state.userInput)
		
	};

	render() {
		return (
			<>
				<div className="section">
					<form onSubmit={this.onFormSubmit} className=" ui form">
						<div className="field">
							<label className="label has-text-centered">Ask away, nerd.</label>
							<input
								type="text"
								value={this.state.userInput}
								onChange={e =>
									this.setState({ userInput: e.target.value })
								}
								className="input"
							/>
						</div>
					</form>
				</div>
					<EightBallResults 
					question={this.state.userQuestion} 
					answer={this.state.userAnswer}
					response={this.state.userResponse}/>
			</>
		);
	}
}
