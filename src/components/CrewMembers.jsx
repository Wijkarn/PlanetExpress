export default function CrewMembers(){

    const benderUrl = new URL('../assets/bender.png', import.meta.url);

    return(
        <img src={benderUrl.href}/>
    );
}