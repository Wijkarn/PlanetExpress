export default function CrewMember({name, imgSrc}){

    return(
        <div className="crew-member">
            <h2 className="crew-member-name">{name}</h2>
            <img src={imgSrc} className="crew-member-img"/>
        </div>
    );
}