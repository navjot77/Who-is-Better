const React=require('react');


function ViewDetails(props){
    return(
        <div className="battle__form">
            <img className="popular__details_image" src={props.image}  alt={'Image for'+ props.name} />
            <h3 id="labelId">@{props.name}</h3>
            {props.children}
        </div>



    );

}
export default ViewDetails;
