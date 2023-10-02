import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faSortUp, faGlassWater } from "@fortawesome/free-solid-svg-icons"
export const SideBarData = [
    {
        title: "კომპანიები",
        path: "#",
        icon: <FontAwesomeIcon icon={faBuilding} color="#0058f0" />,
        iconClosed: <FontAwesomeIcon icon={faSortUp} rotation={180} />,
        iconOpened: <FontAwesomeIcon icon={faSortUp} />,
        subNav: [
            {
                title: "კომპანიების სია",
                path: "/customers",
            }
        ]
    },
    {
        title: "მოწყობილობები",
        path: "#",
        icon: <FontAwesomeIcon icon={faGlassWater} />,
        iconClosed: <FontAwesomeIcon icon={faSortUp} rotation={180} />,
        iconOpened: <FontAwesomeIcon icon={faSortUp} />,
        subNav: [
            {
                title: "აპარატები",
                path: "/almasystemsmodels",
            },
            {
                title: "თავაკები",
                path: "/hpmodels",
            },
        ]

    },
    {
        title: "სხვა რაღაცეები",
        path: "",
        icon: '',
        iconClosed: <FontAwesomeIcon icon={faSortUp} rotation={180} />,
        iconOpened: <FontAwesomeIcon icon={faSortUp} />,
        subNav: [
            {
                title: "ტექნიკოსები",
                path: "/techpersons",
            },
        ]
    }

]