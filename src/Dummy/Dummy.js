
import React from 'react'

import DishSvg from "../assets/svg/cuisine.svg"
import UnFillDish from "../assets/svg/CuisineWhite.svg"

import LocationFill from "../assets/svg/PinSvg.svg";
import LocationUnFill from "../assets/svg/PinSvgWhite.svg";

import BuffetSvg from "../assets/svg/buffetSvg.svg";
import UnFillBuffet from "../assets/svg/buffetSvgWhite.svg";

import Review from "../assets/svg/reviewSvgGrey.svg";
import UnFillReview from "../assets/svg/reviewSvgWhite.svg";


import BirthDaySvg from "../assets/svg/BirthDaySvg.svg";
import IneverserySvg from "../assets/svg/IneverserySvg.svg";
import OutFitSvg from "../assets/svg/OutfitSvg.svg";


//import Guidesvg from "../assets/svg/EatsEzyGuideProfile.svg";
import Guidesvg from "../assets/svg/guide.svg"
import InquireSvg from "../assets/svg/EnquiryProfile.svg";
import LoyaltySvg from "../assets/svg/WalletProfile.svg";
import FavorateSvg from "../assets/svg/HeartSvg.svg";
//import MyPrefrenceSvg from "../assets/svg/MyPreferencesProfile.svg";
import MyPrefrenceSvg from "../assets/svg/cuisine.svg";
//import ReviewSvg from "../assets/svg/ReviewGivenProfile.svg"
import ReviewSvg from "../assets/svg/reviewSvgGrey.svg";
//import TransactionSvg from "../assets/svg/TransectionProfile.svg";
import TransactionSvg from "../assets/svg/TransactionSvg.svg";
//import PrivacySvg from "../assets/svg/PrivacyPolicyProfile.svg";
import PrivacySvg from "../assets/svg/StarSvg.svg";
//import TremsSvg from "../assets/svg/TermaAndConditionProfile.svg";
import TremsSvg from "../assets/svg/dots.svg";
import BellSvg from "../assets/svg/bell.svg";
import LogoutSvg from "../assets/svg/LogoutSvg.svg";
import { ScreenNames } from '../global';
import ToggleSvg from "../assets/svg/toggle.svg";


export const quickLink = [
    {
        id: 0,
        name: "Cuisine",
        fillSvg: <DishSvg />,
        UnfillSvg: <UnFillDish />
    },
    {
        id: 1,
        name: "Recommendations",
        fillSvg: <BuffetSvg />,
        UnfillSvg: <UnFillBuffet />
    },
    {
        id: 2,
        name: "Location",
        fillSvg: <LocationFill />,
        UnfillSvg: <LocationUnFill />
    },
    {
        id: 3,
        name: "Review",
        fillSvg: <Review />,
        UnfillSvg: <UnFillReview />
    },

]

export const quickLinkSvg = [
    {
        name: "Cuisine"
    },
    {
        name: "Buffet"
    },
    {
        name: "Location"
    },
    {
        name: "Cuisine"
    },

]

export const featuredRestaurant = [
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84252932806382,
                1.2799702391345382
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/927b6a7b-137b-487b-bfd3-ff63696431e7/535297_sld.jpg?auto=format&w=1000",
            "https://restobucket.s3.amazonaws.com/general/WhatsApp%20Image%202021-08-28%20at%2015.43.29-1630145783239.jpeg"
        ],
        "cuisines": [
            "Chinese",
            "Muglai"
        ],
        "_id": "612a0d45b00b92539c144d1e",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-4pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-6pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Sunday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0d45b00b92539c144d1f",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "Neil Road 74, 088839 singaporead.wknaodinp",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarshgubrelay@gmail.com",
        "ownerName": "Robert ",
        "accountManager": "Stannis",
        "restaurant_name": "Jekyll & Hyde",
        "reviews": [
            {
                "total_reviews": 7,
                "name": "Wayne F.",
                "ago": "a month ago",
                "rating": 5,
                "content": "Nice Food and affordable price. High quality too with themeats and soups.",
                "imageUri": require(`../assets/images/emoji1.png`),
            },
            {
                "total_reviews": 7,
                "name": "Wayne F.",
                "ago": "a month ago",
                "rating": 5,
                "content": "Nice Food and affordable price. High quality too with themeats and soups.",
                "imageUri": require(`../assets/images/emoji1.png`),
            }
        ],
        "createdAt": "2021-08-28T10:17:41.922Z",
        "updatedAt": "2021-09-22T10:14:44.737Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84252932806382,
                1.2799702391345382
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/927b6a7b-137b-487b-bfd3-ff63696431e7/535297_sld.jpg?auto=format&w=1000",
            "https://restobucket.s3.amazonaws.com/general/WhatsApp%20Image%202021-08-28%20at%2015.43.29-1630145783239.jpeg"
        ],
        "cuisines": [
            "Chinese"
        ],
        "_id": "612a0d45b00b92539c144d9e",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0d45b00b92539c144d1f",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "Neil Road 74, 088839 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarshgubrelay@gmail.com",
        "ownerName": "Robert ",
        "accountManager": "Stannis",
        "restaurant_name": "Jekyll & Hyde",
        "reviews": [

        ],
        "createdAt": "2021-08-28T10:17:41.922Z",
        "updatedAt": "2021-09-22T10:14:44.737Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84252932806382,
                1.2799702391345382
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/927b6a7b-137b-487b-bfd3-ff63696431e7/535297_sld.jpg?auto=format&w=1000",
            "https://restobucket.s3.amazonaws.com/general/WhatsApp%20Image%202021-08-28%20at%2015.43.29-1630145783239.jpeg"
        ],
        "cuisines": [
            "Chinese"
        ],
        "_id": "612a0d45b00b92539c144d6e",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0d45b00b92539c144d1f",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "Neil Road 74, 088839 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarshgubrelay@gmail.com",
        "ownerName": "Robert ",
        "accountManager": "Stannis",
        "restaurant_name": "Jekyll & Hyde",
        "reviews": [
            {
                "total_reviews": 7,
                "name": "Wayne F.",
                "ago": "a month ago",
                "rating": 5,
                "content": "Nice Food and affordable price. High quality too with themeats and soups.",
                "imageUri": require(`../assets/images/emoji1.png`),
            },
            {
                "total_reviews": 7,
                "name": "Wayne F.",
                "ago": "a month ago",
                "rating": 5,
                "content": "Nice Food and affordable price. High quality too with themeats and soups.",
                "imageUri": require(`../assets/images/emoji1.png`),
            },
            {
                "total_reviews": 7,
                "name": "Wayne F.",
                "ago": "a month ago",
                "rating": 5,
                "content": "Nice Food and affordable price. High quality too with themeats and soups.",
                "imageUri": require(`../assets/images/emoji1.png`),
            }
        ],
        "createdAt": "2021-08-28T10:17:41.922Z",
        "updatedAt": "2021-09-22T10:14:44.737Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84252932806382,
                1.2799702391345382
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/927b6a7b-137b-487b-bfd3-ff63696431e7/535297_sld.jpg?auto=format&w=1000",
            "https://restobucket.s3.amazonaws.com/general/WhatsApp%20Image%202021-08-28%20at%2015.43.29-1630145783239.jpeg"
        ],
        "cuisines": [
            "Chinese"
        ],
        "_id": "612a0d45b00b92539c144d3e",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0d45b00b92539c144d1f",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "Neil Road 74, 088839 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarshgubrelay@gmail.com",
        "ownerName": "Robert ",
        "accountManager": "Stannis",
        "restaurant_name": "Jekyll & Hyde",
        "reviews": [

        ],
        "createdAt": "2021-08-28T10:17:41.922Z",
        "updatedAt": "2021-09-22T10:14:44.737Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84392,
                1.2766717
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/ed19946b-27bc-4724-9d9f-84c1f038d9b6/522712_sld.jpg?auto=format&w=1000",
            "https://qul.imgix.net/ed19946b-27bc-4724-9d9f-84c1f038d9b6/522713_sld.jpg?auto=format&w=1000"
        ],
        "cuisines": [
            "Chinese"
        ],
        "_id": "612a0ca8b00b92539c144d1b",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [

        ],
        "thumbnail": "23",
        "address": "Neil Road 74, 088839 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarsh2@gmail.com",
        "ownerName": "John Deo",
        "accountManager": "Pranjal Doorwar",
        "restaurant_name": "Pura Brasa",
        "reviews": [

        ],
        "createdAt": "2021-08-28T10:15:04.388Z",
        "updatedAt": "2021-09-03T20:00:35.357Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.84840418202451,
                1.2830907696944889
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/68af4ff2-6776-4645-862e-bd0764674cf4/575423_sld.jpg?auto=format&w=1000",
            "https://qul.imgix.net/68af4ff2-6776-4645-862e-bd0764674cf4/575424_sld.jpg?auto=format&w=1000"
        ],
        "cuisines": [
            "Chinese"
        ],
        "_id": "612a0dd9b00b92539c144d21",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0dd9b00b92539c144d22",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "7-13 Amoy Street, Far East Square #01-01, 049949 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "himanshu091rawat@gmail.com",
        "ownerName": "Johnny ",
        "accountManager": "Stannis",
        "restaurant_name": "Genius Central Singapore",
        "reviews": [

        ],
        "createdAt": "2021-08-28T10:20:09.791Z",
        "updatedAt": "2021-09-22T10:14:14.884Z",
        "__v": 0
    },
    {
        "location": {
            "type": "Point",
            "coordinates": [
                103.8597478955145,
                1.3012974597415936
            ]
        },
        "restaurant_images": [
            "https://qul.imgix.net/6d8e9f89-3305-4ddb-a72a-c223fd6e220f/401582_sld.jpg?auto=format&w=1000",
            "https://qul.imgix.net/6d8e9f89-3305-4ddb-a72a-c223fd6e220f/400283_sld.jpg?auto=format&w=1000"
        ],
        "cuisines": [
            "Chinese",
            "ssss"
        ],
        "_id": "612a0e38b00b92539c144d24",
        "opening_timings": [
            {
                "day": "Monday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Tuesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Wednesday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Thursday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Friday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            },
            {
                "day": "Sunday",
                "timeslots": [
                    "1pm-2pm",
                    "2pm-3pm",
                    "3pm-4pm"
                ]
            }
        ],
        "current_rating": 5,
        "menuList": [
            {
                "_id": "612a0e38b00b92539c144d25",
                "menu_name": "Indian",
                "pdf_link": "www.com"
            }
        ],
        "thumbnail": "23",
        "address": "Baghdad Street 20A, 199659 singapore",
        "phone": "89898989898",
        "ishalalcertified": true,
        "email": "utkarshgubrelay200@gmail.com",
        "ownerName": "Sasha ",
        "accountManager": "Arya ",
        "restaurant_name": "Sushi Airways",
        "reviews": [

        ],
        "createdAt": "2021-08-28T10:21:44.673Z",
        "updatedAt": "2021-09-22T10:15:16.983Z",
        "__v": 0
    }
]

export const OfferImage = [
    {
        "image": require(`../assets/images/OfferImage.png`)
    },
    {
        "image": require(`../assets/images/OfferImage2.png`)
    },
    {
        "image": require(`../assets/images/OfferImage.png`)
    },
]


export const Recommendations = [
    {
        "imageUri": require(`../assets/images/Recomm1.png`),
        "title": "Snacks to enjoy!",
        "amount": "30 Places"
    },
    {
        "imageUri": require(`../assets/images/Recomm2.png`),
        "title": "Snacks to enjoy!",
        "amount": "30 Places"
    },
    {
        "imageUri": require(`../assets/images/Recomm3.png`),
        "title": "Snacks to enjoy!",
        "amount": "30 Places"
    },
]

export const Cooldata = [
    {
        "imageUri": require(`../assets/images/Area1.png`),
        "title": "Bugis",

    },
    {
        "imageUri": require(`../assets/images/Area2.png`),
        "title": "Orchard",

    },
    {
        "imageUri": require(`../assets/images/Area1.png`),
        "title": "China Town",

    },
    {
        "imageUri": require(`../assets/images/Area2.png`),
        "title": "Bugis",

    },
    {
        "imageUri": require(`../assets/images/Area1.png`),
        "title": "Orchard",

    },
    {
        "imageUri": require(`../assets/images/Area2.png`),
        "title": "China Town",

    },
]


export const RecommendationsByArea = [
    {
        "imageUri": require(`../assets/images/RestaurantImage.png`),
        "name": "Lord Barbecuefdfdfd Na...Lord Barbecue Na",
        "address": "Metro Junctdfdfion,Metro Junction ",
        "reviewCount": 135
    },
    {
        "imageUri": require(`../assets/images/RestaurantImage.png`),
        "name": "Lord Barbecue Na...Lord Barbecue Na",
        "address": "Metro Junctiondfdf,Metro Junction ",
        "reviewCount": 135
    },
    {
        "imageUri": require(`../assets/images/RestaurantImage.png`),
        "name": "Lord Barbecuedfdf Na...Lord Barbecue Na",
        "address": "Metro Jundfdfdcion,Metro Junction ",
        "reviewCount": 135
    },
    {
        "imageUri": require(`../assets/images/RestaurantImage.png`),
        "name": "Lord Barbdfdfecue Na...Lord Barbecue Na",
        "address": "ro Juncfdtion,Metro Junction ",
        "reviewCount": 135
    },
]


export const slideList = [
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
    {
        imgUrl: require(`../assets/images/Corasel1.png`)
    },
]



export const MenuTabData = [
    {
        "name": "Menu"
    },
    {
        "name": "Photo"
    },
    {
        "name": "Reviews"
    },
    {
        "name": "Detail"
    },
]

export const ReferenceData = [
    {
        "name": "Earn Points"
    },
    {
        "name": "Redeem"
    },
]


export const PdfData = [
    {
        "name": "Ala Carto Menu"
    },
    {
        "name": "Butterfly Menu"
    },
    {
        "name": "Cocktail Menu"
    },

]

export const PhotoData = [
    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },

    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },

    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },

    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },
    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },

    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },

    {
        "imageUri": require(`../assets/images/Corasel1.png`)
    },
]

export const commentData = [
    {
        "total_reviews": 7,
        "name": "Wayne F.",
        "ago": "a month ago",
        "rating": 5,
        "content": "Nice Food and affordable price. High quality too with themeats and soups.",
        "imageUri": require(`../assets/images/emoji1.png`),

    },
    {
        "total_reviews": 7,
        "name": "Wayne F.",
        "ago": "a month ago",
        "rating": 5,
        "content": "Nice Food and affordable price. High quality too with themeats and soups.",
        "imageUri": require(`../assets/images/emoji1.png`),
    },
    {
        "total_reviews": 7,
        "name": "Wayne F.",
        "ago": "a month ago ",
        "rating": 5,
        "content": "Nice Food and affordable price. High quality too with themeats and soups.",
        "imageUri": require(`../assets/images/emoji1.png`),
    },
    {
        "total_reviews": 7,
        "name": "Wayne F.",
        "ago": "a month ago .s",
        "rating": 5,
        "content": "Nice Food and affordable price. High quality too with themeats and soups.",
        "imageUri": require(`../assets/images/emoji1.png`),
    },
]


export const WeekData = [
    {
        "Monday": "Mon"
    },
    {
        "Tuesday": "Tue"
    },
    {
        "Wednesday": "Wes"
    },
    {
        "Tursday": "Thur"
    },
    {
        "Friday": "Fri"
    },
    {
        "Saturday": "Sat"
    },
    {
        "Sunday": "Sun"
    },
]

export const weeksShortForm = {

    "MONDAY": "Mon",

    "TUESDAY": "Tue",


    "WEDNESDAY": "Wed",

    "THURSDAY": "Thu",

    "FRIDAY": "Fri",

    "SATURDAY": "Sat",

    "SUNDAY": "Sun",

}

export const TablePrefer = [
    {
       "name" : "Pool Side"
    },
    {
        "name" : "Second Floor"
    },
    {
        "name" : "Balcony 1st Floor"
     },
     {
        "name" : "First Floor"
     },
     {
        "name" : "Open Air"
     },
     {
        "name" : "Any Floor"
     },
]

export const TableData = [
    {
        "name" : "1st Floor"
     },
     {
         "name" : "2nd Floor"
     },
     {
         "name" : "Balcony"
      },
      {
         "name" : "Open Air"
      },
]

export const TableData2 = [
      {
        "name" : "Pool side"
     },
      {
         "name" : "Any Floor"
      },
]

export const TimeData = [
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },

    {
        "Time": "12pm - 1pm"
    },

]



export const CuisionData = [
    {
        "cuisionName": "Mughlai"
    },

    {
        "cuisionName": "Chinese"
    },


    {
        "cuisionName": "Indian"
    },

    {
        "cuisionName": "Fast Food"
    },

]



export const LocationData = [
    {
        "loactionName": "Bugi"
    },
    {
        "loactionName": "China Town"
    },
    {
        "loactionName": "Orchad"
    },

    {
        "loactionName": "LittlIndia"
    },


]

export const QuickAvaliable = [
    {
        "name": "Open Now"
    },
    {
        "name": "Dinner Tonight"
    },
    {
        "name": "Lunch Tomorrow"
    },

    {
        "name": "Dinner Tomo"
    },


]

export const TimeData1 = [
    {
        "Time": "12pm - 3.28pm"
    },
    {
        "Time": "12pm - 3.28pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },

    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },
    {
        "Time": "12pm - 1pm"
    },

]

export const Month = [

    {
        "name": "september"
    },
    {
        "name": "Januray"
    },
    {
        "name": "september"
    },
]


export const ResaturantCardData = [
    {
        "_id:": 1,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Dhieli",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },

    {
        "_id:": 2,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Muddr",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },

    {
        "_id:": 3,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Pikeee",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },

    {
        "_id:": 4,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Divking",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },
    {
        "_id:": 5,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Pikeee",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },

    {
        "_id:": 6,
        "restaurant_images": require(`../assets/images/RestaurantImage.png`),
        "current_rating": 5,
        "restaurant_name": "Divking",
        "address": "Kotar Gate",
        "cuisines": "Mughali",

    },
]


export const SearchData = [
    {
        "name": "Krishna Veg"
    },
    {
        "name": "Havmour Ice creams"
    },
    {
        "name": "Egg less Cakes"
    },
    {
        "name": "Cafe Refreshments"
    },
]


export const ReservesionData = [
    {
        "restaurant_id:": "1",
        "_id:": " 645466",
        "imgUrl": require(`../assets/images/RestaurantImage.png`),
        "status": "Active",
        "restaurant_name": "Urban Tadka Dining",
        "people": "3 People",
        "timeSlot": "10.12.2020",
        "bookedFor": "12pm - 1pm",


    },




]

export const CompletetedData = [
    {
        "restaurant_id:": "1",
        "_id:": " 645466",
        "imgUrl": require(`../assets/images/RestaurantImage.png`),
        "status": "Completed",
        "restaurant_name": "Urban Tadka Dining",
        "people": "3 People",
        "timeSlot": "10.12.2020",
        "bookedFor": "12pm - 1pm",


    },




]


export const dietryData = [
    {
        "name": "No Soya"
    },
    {
        "name": "No Pork"
    },
    {
        "name": "Vegan"
    },
    {
        "name": "Vegetarian"
    },
]


export const SpecialRequestData = [
    {
        "name": "Ground floor only "
    },
    {
        "name": "Open Air"
    },
    {
        "name": "Baby Chair"
    },
    {
        "name": "Smoking Allowed"
    },
]


export const specialOcassionData = [
    {
        "name": "Birthday",
        "svg": <BirthDaySvg />
    },
    {
        "name": "Anniversary",
        "svg": <IneverserySvg />
    },
    {
        "name": "Team Outing",
        "svg": <OutFitSvg />
    },

]


export const profileData = [
    {
        "name": "EatsEzy Guides",
        "svg": <Guidesvg />,
        "screen": ScreenNames.EATSEZY_SCREEN
    },

    {
        "name": "Inquiries",
        "svg": <InquireSvg />,
        "screen": ScreenNames.ENQUIRIES_SCREEN
    },



    {
        "name": "Loyalty Points",
        "svg": <LoyaltySvg />,
        "screen": ScreenNames.WALLET_SCREEN
    },


    {
        "name": "My Favorites",
        "svg": <FavorateSvg />,
        "screen": ScreenNames.MYFAVOURITE_SCREEN
    },


    {
        "name": "My Preferences",
        "svg": <MyPrefrenceSvg />,
        "screen": ScreenNames.MYPREFERENCES_SCREEN
    },


    {
        "name": "Reviews Given",
        "svg": <ReviewSvg />,
        "screen": ScreenNames.REVIEW_GIVEN_SCREEN
    },

    {
        "name": "Transactions",
        "svg": <TransactionSvg />,
        "screen": ScreenNames.TRANSACTION_SCREEN
    },

    {
        "name": "Privacy Policy",
        "svg": <PrivacySvg />
    },

    {
        "name": "Terms and Conditions",
        "svg": <TremsSvg />
    },

    {
        "name": "Push Notifications",
        "svg": <BellSvg />,
        "svg2": <ToggleSvg />
    },

    {
        "name": "Logout",
        "svg": <LogoutSvg />
    },

]


export const EatsEzyguideData = [
    {
        "name": "Nutrition Experts Reveals: Effective food habits",
        "desc": "Welcome to the era where we do snacks break-fast break-fast break-fast, lunch, and........",
        "imgUrl": require(`../assets/images/EatsEzy.png`),
    },
    {
        "name": "Nutrition Experts Reveals: Effective food habits",
        "desc": "Welcome to the era where we do snacks break-fast break-fast break-fast, lunch, and........",
        "imgUrl": require(`../assets/images/EatsEzy.png`),
    },
    {
        "name": "Nutrition Experts Reveals: Effective food habits",
        "desc": "Welcome to the era where we do snacks break-fast break-fast break-fast, lunch, and........",
        "imgUrl": require(`../assets/images/EatsEzy.png`),
    },
    {
        "name": "Nutrition Experts Reveals: Effective food habits",
        "desc": "Welcome to the era where we do snacks break-fast break-fast break-fast, lunch, and........",
        "imgUrl": require(`../assets/images/EatsEzy.png`),
    },
    {
        "name": "Nutrition Experts Reveals: Effective food habits",
        "desc": "Welcome to the era where we do snacks break-fast break-fast break-fast, lunch, and........",
        "imgUrl": require(`../assets/images/EatsEzy.png`),
    },
]


export const cusiene = [
    {
        "name": "Fashion"
    },
    {
        "name": "Fitness"
    },
    {
        "name": "LifeStyle"
    },
]


export const Author = [
    {
        "name": "Business"
    },
    {
        "name": "Biographies"
    },
    {
        "name": "Failure"
    },
    {
        "name": "Success"
    },
]


export const Category = [
    {
        "name": "Pioneering"
    },
    {
        "name": "Niche"
    },
    {
        "name": "Creativity"
    },
    {
        "name": "Success"
    },
]


export const Preferences = [
    "Chinese",
    "Japanese",
    "Italian",
    "International",
    "Sea Food",
    "Buffet",
    "Korean",
    "French",
    "Halal Certified",
    "International",
    "Sea Food",
    "Chinese",
    "Halal Certified",
    "Japanese",
]
export const EnquiriesData = [
    {
        "title": "Straits Teriyaki",
        "desc": "Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print",
        "Date": "10/12/2020 | 02:00 pm"

    },
    {
        "title": "Straits Teriyaki",
        "desc": "Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print",
        "Date": "10/12/2020 | 02:00 pm"

    },
    {
        "title": "Straits Teriyaki",
        "desc": "Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print",
        "Date": "10/12/2020 | 02:00 pm"

    },
    {
        "title": "Straits Teriyaki",
        "desc": "Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print",
        "Date": "10/12/2020 | 02:00 pm"

    },
    {
        "title": "Straits Teriyaki",
        "desc": "Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print",
        "Date": "10/12/2020 | 02:00 pm"

    },

]


export const EarnsPointData = [
    {
        "name": "Every reservation made and completed on app",
        "imgUrl": require(`../assets/images/Dishes.png`),
    },
    {
        "name": "Refer your friends & Earn",
        "imgUrl": require(`../assets/images/Doctor.png`),

    },
    {
        "name": "Recommend new  restaurant",
        "imgUrl": require(`../assets/images/Thumsup.png`),

    },
    {
        "name": "Review a restaurant",
        "imgUrl": require(`../assets/images/Happy.png`),

    },
]

export const RedeemData = [
    {
        "nameone":"Point: 5000",
        "nametwo":"$15 discount availed",
    },
    {
        "nameone":"Point: 5000",
        "nametwo":"$15 discount availed",
    },
    {
        "nameone":"Point: 5000",
        "nametwo":"$15 discount availed",
    },
    {
        "nameone":"Point: 5000",
        "nametwo":"$15 discount availed",
    },
]


export const PointHistoryData = [
    {
        "points": "5000",
        "name": "$15 discount availed",
        "status": "Earned",
        "Date": "20 March 2020"
    },
    {
        "points": "5000",
        "name": "$15 discount availed",
        "status": "Redeem",
        "Date": "20 March 2020"
    },
    {
        "points": "5000",
        "name": "$15 discount availed",
        "status": "Earned",
        "Date": "20 March 2020"
    },
    {
        "points": "5000",
        "name": "$15 discount availed",
        "status": "Earned",
        "Date": "20 March 2020"
    },

]


export const data1 = [
    {
        "name": "0"
    },
    // {
    //     "name": "$0"
    // },
    {
        "name": "$10"
    },
    {
        "name": "$50"
    },
    {
        "name": "$100"
    },
    {
        "name": "$150"
    },
]

export const data2 = [
    {
        "name": "0"
    },
    {
        "name": "1000"
    },
    {
        "name": "5000"
    },
    {
        "name": "10000"
    },
    {
        "name": "150000"
    },
]

export const PriceRange = [
    {
        "name" : ""
    },
    {
        "name" : "$50"
    },
    {
        "name" : "$100"
    },
    {
        "name" : "$200"
    },
    {
        "name" : "$300"
    },
]

export const ReviewScore = [
    {
        "name" : ""
    },
    {
        "name" : "02"
    },
    {
        "name" : "03"
    },
    {
        "name" : "04"
    },
    {
        "name" : "05"
    },
]

export const InformationData = [
    {
        "title": "Be on Time",
        "desc": `All of us hate to queuing.
        We are cognizant your time and to provide 
        you the best service we appreciate if you show 
        up on time. Reservations are marked as 
        no show after 15 minutes of booking start time.`,
        "imgUrl": require(`../assets/images/Clock.png`),
    },
    {
        "title": "Curious to know your change in plans",
        "desc": `We understand nothing is certain and there
        is always a scope of last minute change. 
        EatsEzy provides you a flexibility to update your 
        booking upto 30 minutes before start time.
        Any deposit amount will be carried for your 
        next reservation in same restaurant.`,
        "imgUrl": require(`../assets/images/Pencil.png`),
    },

    {
        "title": "Your request is our priority",
        "desc": `In case if you are celebrating special occasion,
        travelling with a baby or want to smoke while
        you dine in, we want you to let us know. 
        This not only helps us reserve the best table 
        but  might also entitle you a surprise 
        champagne sometime (TnC applied).`,
        "imgUrl": require(`../assets/images/Person.png`),
    },
]
