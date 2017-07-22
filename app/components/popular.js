const React=require('react');
const PropType=require('prop-types');
const Api=require('../utils/git');

function Header(props){
    const list=['All','JavaScript',"Java","Ruby","Python","css"];
    return(

        <div>
            <ul className="popular__tags">
                {list.map((item)=>{
                    return (
                        <li key={item} onClick={props.changeActive.bind(null,item)}
                            style={item===props.selectedLang ? {color:'red'}: null}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}


Header.propType={
    selectedLang: PropType.string.isRequired,
    changeActive: PropType.func.isRequired
}


function Details(props){
    console.log(props.repos)
    return(

            <ul className="popular__details_tags">
                {props.repos.map((repo,index)=>{
                    return(
                       <li key={repo.name} className="popular__details_item">
                           <div className="popular__details_ranking">
                             #{index+1}
                            </div>
                           <ul className="popular__details_item">
                               <li>
                                   <img className="popular__details_image" src={repo.owner.avatar_url} alt={'Image for'+ repo.name} />
                               </li>
                               <li><a href={repo.html_url}>{repo.name.slice(0,15)}</a></li>
                               <li>@{repo.owner.login}</li>
                               <li>{repo.stargazers_count} Stars</li>
                           </ul>



                       </li>

                    )
                })}

            </ul>


    )
}




class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLang:'',
            repos:''
        };
       this.changeActive= this.changeActive.bind(this);
    }

    componentDidMount(){
        this.changeActive('All');

    }

     async changeActive(language) {
        this.setState(function () {
            return({
                selectedLang:language,
                repos:null
            });
        });

        const data=await Api.getRepos(language);
        this.setState(function(){
           return({
               selectedLang:language,
               repos:data
           })

        });

    };

    render(){
        return (
            <div>
            <Header selectedLang={this.state.selectedLang} changeActive={this.changeActive} />
             {!this.state.repos ? <h3>Loading..</h3> : <Details repos={this.state.repos} /> }

            </div>
        )
    }

}
export default Popular