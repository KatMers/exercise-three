$(document).ready(function() {
    getData();
});



function getData() {
	$.getJSON("js/columbia.json", function(schoolsData) {
		//Callback runs after data is loaded.
		console.log(schoolsData);

		loopThroughData(schoolsData)
	})
}


function loopThroughData(s) {
	
	for (i=0; i<s.length; i++) {

		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];

		var gradPct = s[i]["GRADUATES_PCT"];

		// If graduation percent is less than 50%...
		// We use the < operator to test for values less than 50%
		// And we use && to indicate an AND condition
		//if (gradPct < 60 && gradPct > 0) {
			// Do this...

		//console.log(year, schoolName, gradPct);

		var barWidth = gradPct * 10;

		if (schoolName === "FREDERICK DOUGLASS HIGH") {
		
			$(".chart").append(
				"<div class='bar' style='width: "+barWidth+"px'></div>"
				);
 

		}
	}
	}
