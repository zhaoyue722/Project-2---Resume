var bio = {
	"name" : "Zoey Zhao",
	"role" : "1st-Year Master Student of CS",
	"contacts" : {
		"mobile" : "(929)2859136",
		"email" : "yz2282@nyu.edu",
		"github" : "zhaoyue722",
		"twitter" : "@yueenz",
		"location" : "Greater New York City Area"
	},
	"welcomeMessage" : "A life, a fulfilling life, a rich life includes ups and downs, includes pain and getting up again, includes failure and getting up again.",
	"skills" : [
	"Java", "Python", "PHP", "C++", "C#", "SQL", "Javascript", "HTML", "CSS", "MySQL", "Git", "Bootstrap", "Mandarin", "German"
	],
	"biopic" : "images/touxiang.jpg",
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedContact = formattedMobile + formattedEmail + formattedTwitter +formattedGithub + formattedLocation;
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			};
		};
	}
	

};




bio.display();

var education = {
	"schools" : [
	{
		"name" : "New York University",
		"location" : "New York, US",
		"degree" : "Master",
		"majors" : ["Computer Science"],
		"dates" : "201605",
		"url" : "http://www.nyu.edu"
	},
	{
		"name" : "Tongji University",
		"location" : "Shanghai, China",
		"degree" : "Bachelor",
		"majors" : ["Computer Science", "German"],
		"dates" : "201406",
		"url" : "http://www.tongji.edu.cn"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"date" : "20150302 － 20150320",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2794148535/e-2730818599/m-2730818602"

	},
	{
		"title" : "Introduction to Computer Science and Programming Using Python",
		"school" : "MIT",
		"date" : "20141030 － 20141227",
		"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0"
	}
	],
	"display" : function() {
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var fmtschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
			var fmtschoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var fmtschooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var fmtschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			
			var allMajor = "";
			if (education.schools[school].majors.length > 0) {
				allMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", "));
				//for (var a = 0; a < education.schools[school].majors.length; a++) {
				//	allMajor += education.schools[school].majors[a];
				//};
				//$(".education-entry:last").append(allMajor);
				
			};
			$(".education-entry:last").append(fmtschoolname + fmtschooldegree + fmtschooldates + fmtschoollocation + allMajor);
			$(".education-entry:last a").attr("href", education.schools[school].url);
		}
		$("#education").append(HTMLonlineClasses);
		
		for (var oc in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var fmtonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
			var fmtonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
			var fmtonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].date);
			$(".education-entry:last").append(fmtonlinetitle);
			$(".education-entry:last").append(fmtonlineschool);
			$(".education-entry:last").append(fmtonlinedates);
			$(".education-entry:last a").attr("href", education.onlineCourses[oc].url);

		}
		//var fmtonlinetitle = HTMLonlineTitle.replace("%data%", education.)

	}
};

education.display();

var work = {
	"jobs" : [
	{
		"employer" : "NEW YORK UNIVERSITY",
		"title" : "Teaching Asistant",
		"location" : "Brooklyn, NY",
		"dates" : "Feb, 2015 - Present",
		"description" : "for the course CS 6843 / CS 4793 - Computer Networking"
	}
	],
	"display" : function() {
		for (var j in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var fmtworkemployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
			var fmtworktitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
			var fmtworklocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
			var fmtworkdates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
			var fmtworkdes = HTMLworkDescription.replace("%data%", work.jobs[j].description);
			$(".work-entry:last").append(fmtworkemployer + fmtworktitle + fmtworkdates + fmtworklocation + fmtworkdes);
			//$(".work-entry:last a").attr("href", "nyu.edu");


		};

	}
}

work.display();

var projects = {
	"projects" : [
	{
		"title" : "Online Community for Fans of Live Music",
		"dates" : "Nov 2014 - Dec 2014",
		"description" : "This live music community is a social network for fans of live music. Users are able to specify their musical preferences and connect with others. They can also RSVP to, rate and review concerts.",
		"images" : [
		"images/onlinemusical-er.png",
		"images/upcomming.png", 
		"images/band.png"
		]

	},
	{
		"title" : "Amoureux",
		"dates" : "Feb 2015 - Present",
		"description" : "Amoureux is an iOS application for couples to record moments in their lives. Lovers can share notes, upload photos with description and show the different weather for long-distance relationship lovers. It also has a private chatting mode for each other.",
		"images" : [
		"images/sidebar.jpg",
		"images/timeline.jpg",
		"images/aboutus.png"
		]
	}
	],
	"display" : function() {
		for (var pro in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var fmtprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
			var fmtprojectdate = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
			var fmtprojectdes = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
			if (projects.projects[pro].images.length > 0) {
				var imgs = projects.projects[pro].images;
				var fmtprojectimages = "";
				for (var i in imgs) {
					fmtprojectimages += HTMLprojectImage.replace("%data%", imgs[i]);

				}
				fmtprojectdes +=fmtprojectimages;
			}
			$(".project-entry:last").append(fmtprojecttitle + fmtprojectdate + fmtprojectdes);

		};
	}
}

projects.display();

function fmtname(name) {
	var fmtname = name.split(" ");
	return fmtname[0][0].toUpperCase() + fmtname[0].slice(1).toLowerCase() + " " + fmtname[1].toUpperCase();
}

$("#mapDiv").append(googleMap);
$("#main").append();