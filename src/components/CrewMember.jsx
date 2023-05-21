export default function CrewMember({name, imgSrc}){

    return(
        <div className="crew-member">
            <h3 className="crew-member-name">{name}</h3>
            <img src={imgSrc} className="crew-member"/>
        </div>
    );
}