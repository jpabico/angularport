var app = angular.module("myapp", [])
    
    app.controller("BigController", function($scope) {
        this.stuff = myAppsInfo;
        this.appClickNum = 0;

        this.getAppImage = function(appIndex) {
            return this.stuff[appIndex].images[0];
        };

        this.getAppName = function(appIndex) {
            return this.stuff[appIndex].name;
        };

        this.getAppDescription = function(appIndex) {
            return this.stuff[appIndex].description_text;
        };

        this.getAppFeatures = function(appIndex) {
            return this.stuff[appIndex].features_text;
        };

        this.getAppTechnology = function(appIndex) {
            return this.stuff[appIndex].technology_text;
        };

        this.getAppUrl = function(appIndex) {
            return this.stuff[appIndex].url;
        };

    });

    app.controller("PanelController", function($scope) {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab
        };

    } );
    
    app.controller("GalleryController", function($scope) {
        this.verycurrent = 0;
        this.setVeryCurrent = function(pickThisApp) {
            this.veryCurrent = pickThisApp || 0;
        };
    });

    var myAppsInfo = [
        {
            name: "quest", 
            images: ['../../Desktop/my_portfolio/jpabico.github.io/images/quest_pic.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        }, 
        {
            name: "Jury", 
            images: ['images/rsz_jury_landing_page.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        },
        {
            name: "Letter Stream", 
            images: ['images/rsz_letterstream_pic.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        },
        {
            name: "Tumblr-Clone", 
            images: ['images/rsz_tumblr-clone-dbc.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        },
        {
            name: "Connect 4", 
            images: ['images/rsz_connect-4.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        },
        {
            name: "Quest", 
            images: ['images/rsz_quest_pic.jpg'],
            description_text: "this is the description text.  it is expected be a long paragraph.  this is filler text. so blah blah blah, and hum hum hum. i got a ticket for the long way round. to bottles of whish along the way. and i sure would like some sweet company, and i'm leaving tomorrow what do you say?",
            features_text: "maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again. maybe i'll make this a list of things that are featured in the app.  but for now, text is fine.  copy and paste these paragraphs again.",
            technology_text: "it would be nice to show icons here, but for now, let's just say it's a short list of common technologies.  i don't expect this paragraph to be very long at all.",
            url: "http://google.com"
        }
    ];