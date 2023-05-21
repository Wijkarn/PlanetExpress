export default function CrewMember({name, imgSrc}){

    const imgUrl = new URL(imgSrc, import.meta.url);

    return(
        <div>
            <h3>{name}</h3>
            <img src={imgUrl}/>
        </div>
    );
}