import React from 'react'
import {Link} from 'react-router-dom';


class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:''
        };
        this.inputChanged=this.inputChanged.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    inputChanged(e){
        const value=e.target.value;

        this.setState(function() {
            return ({
                userName: value
            })
        });

    }
    submitForm(e){
        e.preventDefault();
        this.props.submitButton(this.props.label,this.state.userName);
    }
    render(){
        return(
            <div >
            <h1>Player {this.props.label}</h1>
            <form className="battle__form" onSubmit={this.submitForm}>
                <input id='username' type="text" value={this.state.userName} placeholder="Type your Github Name"
                onChange={this.inputChanged} />
                <button  type="submit" className="button"> SUBMIT</button>
            </form>
            </div>
        )


    }

}




class Battle extends React.Component{

    constructor(props){
        super(props);
        this.state={
            usernameOne:'',
            imageOne:'',
            usernameTwo:'',
            imageTwo:''
        };
        this.submitButton=this.submitButton.bind(this);
    }
    submitButton(id, name){
        this.setState(function(){
            const newState={};
            newState[`username${id}`]=name;
            newState[`image${id}`]=`http://github.com/${name}.png?size=250`;
            console.log(newState)
            return newState;
        });
    }
    render() {
        const usernameOne=this.state.usernameOne;
        const usernameTwo=this.state.usernameTwo;
        return(
            <div className="battle__main">
                {usernameOne ? <h1>In progress</h1> : <InputForm name={usernameOne}
                label="One"
                submitButton={this.submitButton}
                />}

                {!usernameTwo &&
                <InputForm
                    name={usernameTwo}
                    label="Two"
                    submitButton={this.submitButton}
                />}


            </div>


        );
    }
};

export default Battle;