import React from 'react';

class NewNum extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			Bknum : 0,
			num :[0,1,2,3,4,5,6,7,8,9,10],
			prizes :[
			'Try Again',
			'iphone7',
			'Laptop',
			'Bike',
			'Tour',
			'iphone5',
			'Smart Phone',
			'cash 5000',
			'sports shoes',
			'football',
			'surprize Gift'
			
			]
		}
		this.updateNum = this.updateNum.bind(this)
	}

	updateNum(){
		let {num} = this.state;

		let rand = Math.floor((Math.random() *11));

		this.setState({
		Bknum:num[rand]
		})
	}

	render(){
		return(
			<div>
			<div className="jumbotron" style = {{background:"mediumaquamarine"}}><h2>PLAY AND WIN PRIZES</h2></div>
			{this.state.prizes.map((elem, index) => {
				return <p style={{ color: (this.state.Bknum == index ? 'red' : '') }}>{index}:{elem}</p>
			})}
			
			
			<div class="alert alert-success">
  			<strong style = {{fontSize : "50px"}}>{this.state.Bknum}!</strong> Your Number is Here.
			</div>

			
			
			<center><button type="button" className="btn btn-default btn-lg dropdown-toggle" style = {{background:"mediumaquamarine"}}onClick= {this.updateNum}>Action</button></center>
			
			</div>
			)
	}
}

export default NewNum;