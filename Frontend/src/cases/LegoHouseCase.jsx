import {LegoHouseIcon, LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, ReactTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
// The LEGO House projected started early 2023. Over time it became a 30 - 40 man team with varying competences in 

export default function LegoHouseCase() {
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            from="2023-03-01"
            to="2025-02-01"
            title="Digital rebuild of LEGO House"
            images={["/CaseTEMP.jpg", "/CaseTEMP.jpg"]}
            summary={summary}
            tech={tech}
            techStack={[UnityTech, AspDotNetTech, AzureTech, RabbitMqTech, MsSqlTech]}
        />
    );
}

const summary = "LEGO House, Denmark, opened in 2017 with 30+ software experiences centered around the physical LEGO brick. " +
    "Experiences were built in isolation - code, and infrastructure duplicated with no shared technical foundation. " +
    "Guests were unhappy with the quality of the experiences, so by taking the software that worked, improving or replacing what didn't, LEGO House underwent a digital rebuild. " +
    "Floor staff now have more time to interact with their guests, and are empowered to handle basic software and hardware failures themselves, using an iOS app to manage failing edge devices without involving maintenance staff. " +
    "Developers now have a shared, battle-tested platform to integrate future experiences into.";

const tech = "All experiences were built using the Unity game engine. Enabling guest-checkins, photo/video capture, observability, and edge device interaction, " +
    "each experience integrated by RabbitMQ with a shared platform, written in ASP.NET, hosted in Azure Container Apps."