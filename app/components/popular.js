const React=require('react');


class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLang:'All'
        }
       this.changeActive= this.changeActive.bind(this);
    }

    changeActive(language){
        this.setState(function () {
            return({
                selectedLang:language
            });

        });
    }

    render(){
        const list=['All','JavaScript',"Java","Ruby","Python","css"];

        return (
            <div>
                <p>{this.state.selectedLang}</p>
                <ul className="popular__tags">
                    {list.map((item)=>{
                        return (
                            <li key={item} onClick={this.changeActive.bind(null,item)}
                            style={item===this.state.selectedLang ? {color:'red'}: null}>
                                {item}
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }

}
export default Popular