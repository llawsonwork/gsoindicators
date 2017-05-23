// __________________________________
//  Site Configuration              |
// ----------------------------------
//        \   ^__^
//         \  (oo)\_______
//            (__)\       )\/\
//                ||----w |
//                ||     ||
//
//  Pretty self-explanatory, except for these:
//
//  qolembedURL     if you have a qol embed install, put the location here, otherwise set to null
//  qolreportURL    if you have a qol report install, put the location here, otherwise set to null
//  qoldashboardURL     if you have a qol dashboard install, put the location here, otherwise set to null
//  contactForm     location of your contact form if you have one for the dashboard, otherwise null
                    // POST arguments to the contact page will be:
                    //     email : sender email,
                    //     url: the current window location,
                    //     agent: users's browser info,
                    //     subject: "Whatever",
                    //     to: email address(s) to send the feedback to,
                    //     message: "I hate your website or whatever"
//  whatsnew        an array of recently updated metric id's to put in a what's new box, like ["2", "12"].
//                  set to null if you've got none
//  contacts "tobin.bradley@gmail.com,qualityoflife@charlottenc.gov",
//

let siteConfig = {
    "neighborhoodDescriptor": "Tract",
    "neighborhoodDefinition": "Census made this. No one knows how?",
    "gaKey": "",
    "keywords": "GIS,Guilford County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government",
    "author": "Leonard Lawson",
    "title": "Guilford Quality of Life",
    "description": "Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.",
    "qolembedURL": null,
    "qolreportURL": null,
    "qoldashboardURL": "https://mcmap.org/qol/",
    "contactForm": null,
    "contacts": "",
    "whatsnew": ["1", "2"],
    "links": [
        {
            "href": "",
            "text": "About"
        },
        {
            "href": "",
            "text": "Download Data"
        },
        {
            "href": "",
            "text": "Guilford County"
        },
        {
            "href": "",
            "text": "City of Greensboro"
        }
    ]
};

module.exports = siteConfig;
