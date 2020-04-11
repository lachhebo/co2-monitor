// Global Constants 

const COUNTRIES_SCORES = {
	"FRANCE": 300
}

const AREA_SCORES = {
	"EUROPE": 1000
}

const WEBSITE_SCORES = {
	"https://www.youtube.com": 5,
	"https://stackoverflow.com": 2
}

const MEAN_CO2_WEBSITE_SCORE = 1.5

const details = {
	'title': 'co2-monitor' 
}

const details_bis = {
	'path': 'new_icons/favicon.ico'
}

var img = new Image(src = 'new_icons/favicon.ico');

chrome.browserAction.setTitle(details)
chrome.browserAction.setIcon(details_bis)

// Global variables 

var CO2_REQUEST_SCORE = 0; 
var COUNTRY = 300;
var AREA = 1000;
//var COMPUTER_SCORE = 1;

// Funtions

function compute_co2_score(co2_request_score, country_score, area_score){
	var co2_score = co2_request_score * country_score * area_score
	return co2_score
}


var compute_co2_request_score = function(details) {

	website_name = details["initiator"]

	if (website_name in WEBSITE_SCORES){
		website_score = WEBSITE_SCORES[website_name]
	}
	else  {
		website_score = MEAN_CO2_WEBSITE_SCORE
	}

	var content_length = 1; // in case there is no content-length in the reponse header
	for (i in details["responseHeaders"]){
		if (details["responseHeaders"][i]["name"] === "content-length"){
			content_length = details["responseHeaders"][i]["value"]
		}
	} 
	
	CO2_REQUEST_SCORE = CO2_REQUEST_SCORE + content_length * website_score // number of octet in base 10

	co2_score = compute_co2_score(CO2_REQUEST_SCORE, COUNTRY, AREA)


	result = {
		text : (CO2_REQUEST_SCORE).toString()
	}

	chrome.browserAction.setBadgeText(result)
};


// Callbacks

// Each time a new header is received or sent, we need to update the data transfert code.  
chrome.webRequest.onHeadersReceived.addListener(
	compute_co2_request_score, {urls : ["<all_urls>"]}, ["responseHeaders"] );


