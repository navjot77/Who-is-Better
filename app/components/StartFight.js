const React=require('react');
import {getResultss} from '../utils/git';
const queryString=require('query-string');
import ViewDetails from './ViewDetails';
import Loading from './Loading';

function Players(props){
    const info=props.player.profile;
    return(
        <div className="battle__form">
            <h1 id="labelId">{props.label}</h1>
            <ViewDetails image={props.player.profile.avatar_url}
                        name={props.player.profile.name}/>

            <ul className="list__tags">
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos: {info.public_repos}</li>
                {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
            </ul>

        </div>
    )




}





class StartFight extends React.Component{
    constructor(props){
        super(props);
        this.state={
            winner:null,
            looser:null,
            loading:true,
            error:false

        }
    }

     async componentDidMount(){
        console.log('hello')
        try {
            const {usernameOne, usernameTwo} = queryString.parse(this.props.location.search);
            const [winner, looser] = await getResultss(usernameOne, usernameTwo);

            this.setState(function(){
                return(
                    {
                        winner,
                        looser,
                        loading:false,
                        error:false
                    }
                );


            });
        }
        catch(e){
          console.log(e);
            this.setState(function(){
                return(
                    {
                        error:true,
                        loading:false
                    }
                )


            })
        }


    }




    render(){
        return(
            <div className="battle__main">
            {this.state.loading ? <Loading value="Loading"/>:
            <Players player={this.state.winner} label="Winner"/>
            }

            {this.state.loading ? '':
                    <Players player={this.state.looser} label="Looser"/>
            }

            </div>

        )
    }






}
export default StartFight;