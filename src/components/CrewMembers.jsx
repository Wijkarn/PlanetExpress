import { useEffect, useState } from "react";
import CrewMember from "./CrewMember";

export default function CrewMembers() {
    const [crewMembers, setCrewMembers] = useState([]);

    async function getCrewMembers() {
        const res = await fetch("https://planetexpress-912b7-default-rtdb.europe-west1.firebasedatabase.app/CrewMembers/.json");

        if (res.status == 200) {

            const data = await res.json();

            console.log(data);

            const crewMembersArray = []
            Object.values(data).map(cm => {

                //const imgUrl = new URL(cm.imgSrc, import.meta.url);
                crewMembersArray.push(
                    {
                        name: cm.name,
                        imgSrc: cm.imgSrc
                    }
                )
            });

            setCrewMembers(crewMembersArray);
        }
    }

    useEffect(() => {
        getCrewMembers();
    },[]
    );

    const benderUrl = new URL('../assets/bender.png', import.meta.url);
    //<img src={benderUrl.href}/>

    return (
        <div className="crew-members-div">
            {crewMembers.map(cm => <CrewMember key={cm.name} name={cm.name} imgSrc={cm.imgSrc} />)}
        </div>
    );
}