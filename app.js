
window.onload = function () {
	loadClock();
}




function loadClock() {
	var uhours = document.getElementById('hours')
	var umins = document.getElementById('mins')
	var usecs = document.getElementById('secs')
	var dmy = document.getElementById("date")
	var days = document.getElementById("da")
	var time = new Date();
	var hours = time.getHours();
	var mins = time.getMinutes();
	var secs = time.getSeconds();
	var date = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	var deys = time.getDay()


	function isless() {


		function lessTHanTen() {
			if (hours < "10") {
				hours = "0" + hours;
			}
			if (mins < "10") { mins = mins = "0" + mins; }
			if (secs < "10") { secs = "0" + secs; }

		}
		lessTHanTen();
		uhours.innerHTML = hours + "-";
		umins.innerHTML = mins;
		usecs.innerHTML = secs;

	}
	function whichmonth() {
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		]

		var curmon = months[month]
		dmy.innerHTML = curmon + "<br> " + date + "<br> " + year

	}
	function whichday() {
		var dayss = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
		var today = dayss[deys]
		days.innerHTML = today
	}
	whichday();
	whichmonth();
	isless();
}
setInterval(loadClock, 1000);