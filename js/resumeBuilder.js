var work = {
	"jobs": [	
		{
			"employer": "PNU - Princess Nourah Bint Abdul Rahman University",
			"image" : "images/pnu.png",
			"title": "Web developer",
			"location": "Princess Nourah Bint Abdul Rahman University",
			"dates": "2012",
			"description": "I worked at PNU for 3 years as a Web Developer."
		},	
        {
            "employer": "KAU - King Saud University",
            "image" : "images/ksu.png",
            "title": "System analyst",
            "location": "King Saud University",
            "dates": "2016",
            "description": "I am working at KSU from two years ago, as a System Analyst"        
        }, 
          {
			"employer": "KAU - King Saud University",
			"image" : "images/ksu.png",
			"title": "System analyst",
			"location": "King Saud University",
			"dates": "2016",
			"description": "I am working at KSU from two years ago, as a System Analyst"		
		}			
	],
	displayWork: function() {
		for (var x= 0; x<work.jobs.length; x++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
            $(".work-entry:last").append(formattedEmployer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
            $(".work-entry:last").append(formattedTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[x].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedImage= HTMLworkImage.replace("%data%", work.jobs[x].image);
            $(".work-entry:last").append(formattedImage);            
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.displayWork();

var projects = {
	"projects": [
		{
			"title": "Portfoilo",
			"dates": "2016",
			"description": "Portfoilo",
			"images": ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg"],
			"url" : "https://github.com/SafiahAlsalem"
		},
		{
			"title": "Resume",
			"dates": "2017",
			"description": "Resume",
			"images": ["images/p11.png", "images/p22.png"],
			"url" : "https://github.com/SafiahAlsalem"
		}

	],
 	displayProjects: function() {
        for (var x= 0; x<projects.projects.length; x++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle= HTMLprojectTitle.replace("%data%", projects.projects[x].title);
            var formattedProjectURL= HTMLprojectURL.replace("%data%", projects.projects[x].url);
            formattedProjectTitle= formattedProjectTitle + formattedProjectURL;
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[x].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[x].description);
            $(".project-entry:last").append(formattedDescription);
            for (var y=0; y<projects.projects[x].images.length; y++) {
	            var formattedImage= HTMLprojectImage.replace("%data%", projects.projects[x].images[y]);
	            $(".project-entry:last").append(formattedImage);
        	}
        }
    }
};
projects.displayProjects();

var bio = {
	"name": "Safiah Alsalem",
	"role": "Web Developer & Systems analyst",
	"welcomeMessage": "",
	"biopic": "images/User.png",
	"contacts" : {
		"mobile": "📞 055555555",
		"email": "📧 SafiahAlsalem@gmail.com",
		"github": "https://github.com/SafiahAlsalem",
		"Twitter": "@SafiahAlsalem",
		"location": "Riyadh"
	},
	"skills": ["Systems analysis and design", "Web Developmwnt", "Team Work", "Communication Skill"],
	displayBio: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name); 
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
		$("#header").prepend(formattedName + formattedRole);  
		var formattedMessage= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedMessage);
		var formattedPic= HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formattedPic);
		var formattedContact= HTMLcontactGeneric.replace("%data%", " ");
		$("#topContacts").prepend(formattedContact);
		var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedbioGithub= HTMLgithub.replace(/%data%/,bio.contacts.github);
		$("#topContacts").append(formattedbioGithub);
		$("#footerContacts").append(formattedbioGithub);
		var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedTwitter= HTMLtwitter.replace(/%data%/,bio.contacts.Twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		$("#header").append(HTMLskillsStart);
		for (var x=0; x<bio.skills.length; x++) { 
			var formattedSkills =  HTMLskills.replace("%data%", bio.skills[x]);
			$("#skills").append(formattedSkills); 
		}
	}
};
bio.displayBio();

var education = {
    "schools": [
        {
            "name": "Princess Noura Bint Abdurahman University",
            "location": "Riyadh",
            "degree": "Bachelor degree",            
            "majors": ["One", "Two", "Three"],
            "dates": "2017",
            "url": "http://pnu.edu.sa/"
        },        
        {
            "name": "Arrowad International Schools",
            "location": "Riyadh",
            "degree": "High School",            
            "majors": ["One", "Two", "Three"],
            "dates": "2011",
            "url": "http://ais.sch.sa/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Development Nanodegree",
            "school": "Udacity 	",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ],
    displayEducation: function() {
    	$("#education").append(HTMLschoolStart);
        for (var x=0; x<education.schools.length; x++) {
            var formattedName = HTMLschoolName.replace("%data%",education.schools[x].name);
            var formattedSchoolURL= HTMLschoolURL.replace("%data%", education.schools[x].url);
            formattedName= formattedName + formattedSchoolURL;
            $(".education-entry:last").append(formattedName);
            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[x].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
            $(".education-entry:last").append(formattedDegree);
            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[x].majors);
            $(".education-entry:last").append(formattedMajor);
            var formattedDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);
            $(".education-entry:last").append(formattedDates);            
        }
        for (var y=0; y<education.onlineCourses.length; y++) {
        	$(".education-entry:last").append(HTMLonlineClasses);
            var formattedCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[y].title);
            $(".education-entry:last").append(formattedCourseTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[y].school);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[y].url);
            formattedSchool = formattedSchool + formattedCourseURL;
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[y].dates);
            $(".education-entry:last").append(formattedDates);
        }
    }
};
education.displayEducation();




// function inName(n) {
//     var newn=n.trim().split(" ");
//     var n1=newn[0].slice(0,1).toUpperCase()+newn[0].slice(1).toLowerCase();
//     var n2=newn[1].toUpperCase();
//     return n1+" "+n2;
// }
// $("#main").append(internationalizeButton);




function locationizer(work_obj) {
    var Locat=[];
    for (var x=0; x<work.jobs.length; x++) {
        locat.push(work_obj.jobs[x].location);
    }
    return locat;
}


$("#mapDiv").append(googleMap);