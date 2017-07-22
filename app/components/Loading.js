const React=require('react');
const PropType=require('prop-types');


const styles={
content:{
    textAlign:'center',
    fontSize:50
}

};

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }

    componentDidMount(){
        const fullValue='Loading...';
        this.counter=window.setInterval(()=>{
                if (this.state.value === fullValue){
                    this.setState(function () {
                       return ({
                       value:this.props.value
                       })
                    })
                }
                else{
                    this.setState(function (prevState) {
                        return ({
                            value:`${prevState.value}.`
                    })
                    })
                }
        },300);

    }

    componentWillUnmount(){
        window.clearInterval(this.counter);

    }

    render(){
        return(
            <h1 style={styles.content}>{this.state.value}</h1>

        );
    }
}

Loading.propTypes={
    value:PropType.string.isRequired
};

Loading.defaultProps={
    text:'Loading'
};

export default Loading;