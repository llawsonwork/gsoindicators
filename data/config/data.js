// ***********************************************************
// Ye Olde Metric Configuration
//
// Here's the format:
// "m<the metric number>": {
//        "metric"        the metric number
//        "type"          Type of calculation to be performed (determines files to fetch). Options are sum, mean, and weighted.
//                            sum: r<metric>.csv
//                            mean: n<metric>.csv
//                            weighted: r<metric>.csv and d<metric>.csv
//        "category"      the category of the metric
//        "title"         metric descriptive title
//        "accuracy"      [optional] set true if metric has an accuracy file (i.e. m<metric>-accuracy.csv)
//        "label"         [optional] metric unit information
//        "decimals"      [optional] number of decimal places to display (default is 0)
//        "prefix"        [optional] prefix for the number, like '$'
//        "world_val"    [optional] override study area values for entire area via array
//                                 ex: "world_val": {"y_2013": 1234, "y_2015": 2345}
//        "suffix"        [optional] suffix for the number, like '%'
//        "raw_label"     [optional] label for raw number if available (also makes raw number visible)
// }
// ***********************************************************

let dataConfig = {

    "m1": {
        "metric": "1",
        "category": "Population",
        "label": "Population",
        "title": "Total Population",
        "type": "sum"
    },
    "m2": {
        "metric": "2",
        "category": "Housing",
        "label": "Households",
        "title": "Burdened Owner Households",
        "type": "sum"
    },
	"m3": {
        "metric": "3",
        "category": "Housing",
        "label": "Households",
        "title": "Burdened Renter Households",
        "type": "sum"
    },
	"m4":{
		"metric": "4",
		"category": "Development",
		"label":  "US Dollars",
		"prefix": "$",
		"title": "Planned Construction",
		"type": "sum"
	},
	"m5":{
		"metric": "5",
		"category": "Income",
		"label":  "US Dollars",
		"prefix": "$",
		"title": "Median Household Income",
		"type": "mean"
	},
	"m6":{
		"metric": "6",
		"category": "Income",
		"label":  "US Dollars",
		"prefix": "$",
		"title": "Median Family Income with Children under 18",
		"type": "mean"
	},
	"m7":{
		"metric": "5",
		"category": "Income",
		"label":  "US Dollars",
		"prefix": "$",
		"title": "Median Household Income White",
		"type": "mean"
	},
	"m8":{
		"metric": "5",
		"category": "Income",
		"label":  "US Dollars",
		"prefix": "$",
		"title": "Median Household Income Black",
		"type": "mean"
	},
};

module.exports = dataConfig;
