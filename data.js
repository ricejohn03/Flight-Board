const FLIGHT_DATA = {
    Enterprise: [
        {
            origin: "Earth",
            destination: "Vulcan",
            departureTime: { scheduled: 1700, current: 1700 },
            arrivalTime: { scheduled: 1900, current: 1900 }
        },
        {
            origin: "Tarsus IV",
            destination: "Earth",
            departureTime: { scheduled: 1300, current: 1330 },
            arrivalTime: { scheduled: 1600, current: 1630 }
        }
    ],
    "Millenium Falcon": [
        {
            origin: "Earth",
            destination: "Naboo",
            departureTime: { scheduled: 1700, current: 1900 },
            arrivalTime: { scheduled: 2000, current: 2200 }
        },
        {
            origin: "Mustafar",
            destination: "Earth",
            departureTime: { scheduled: 1800, current: 1800 },
            arrivalTime: { scheduled: 1900, current: 1900 }
        }
    ],
    Serenity: [
        {
            origin: "Persephone",
            destination: "Earth",
            departureTime: { scheduled: 1700, current: 1800 },
            arrivalTime: { scheduled: 1900, current: 2000 }
        },
        {
            origin: "Earth",
            destination: "Ariel",
            departureTime: { scheduled: 1200, current: 1200 },
            arrivalTime: { scheduled: 1430, current: 1430 }
        }
    ]
};


export default FLIGHT_DATA