import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding } from "@fortawesome/free-solid-svg-icons"
export const SideBarData = [
    {
        title: "კომპანიები",
        path: "/customers",
        icon: <FontAwesomeIcon icon={faBuilding} color="#0058f0"/>,
    },
    {
        title: "აპარატები",
        path: "/almasystemsmodels",
        icon: 'IZZZ',
        iconClosed: 'C',
        iconOpened: 'O',
        
    },
    {
        title: "სხვა რაღაცეები",
        path: "/test",
        icon: 'IZZZ',
        iconClosed: 'C',
        iconOpened: 'O',
    }

]