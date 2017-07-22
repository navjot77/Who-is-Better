import React from 'react'
import {Link} from 'react-router-dom';
import ViewDetails from './ViewDetails';

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
            <h1 id="labelId">Player {this.props.label}</h1>
            <form className="battle__form" onSubmit={this.submitForm}>
                <input id='username' autoComplete='off' type="text" value={this.state.userName} placeholder="Enter Github Name"
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
        this.handleReset=this.handleReset.bind(this);
    }
    handleReset(id){
        this.setState(function(){
            const newState={};
            newState[`username${id}`]='';
            newState[`image${id}`]='';
            return newState;
        });


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
            <div>
            <div className="battle__main">
                {usernameOne ?
                    <ViewDetails
                             id="One"
                             image={this.state.imageOne}
                             resetButton={this.handleReset}
                            name={this.state.usernameOne}>
                    <button className='reset' onClick={this.handleReset.bind(null,'One')}>Reset</button>

                    </ViewDetails>
                    : <InputForm name={usernameOne}
                                label="One"
                                submitButton={this.submitButton}
                                />}

                {usernameTwo ? <ViewDetails
                    id="Two"
                    image={this.state.imageTwo}
                    resetButton={this.handleReset}
                    name={this.state.usernameTwo}>
                    <button className='reset' onClick={this.handleReset.bind(null,'Two')}>Reset</button>

                    </ViewDetails>
                     : <InputForm name={usernameTwo}
                                 label="Two"
                                 submitButton={this.submitButton}
                    />}


            </div>

                {usernameTwo && usernameOne && <Link className='button battle__main'
                                                     to={
                                                         {pathname:this.props.match.url+'/results',
                                                             search:'?usernameOne='+usernameOne+'&usernameTwo='+usernameTwo}
                                                     }>
                    Start Battle
                </Link>
                }

            </div>

        );
    }
}

export default Battle;