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
            name: "Wait and Eat", 
            images: ['../../Desktop/my_portfolio/jpabico.github.io/images/quest_pic.jpg'],
            description_text: " ",
            features_text: " ",
            technology_text: ["Javascript", "Angular.js", "jQuery/AJAX", "HTML5", "CSS3", "APIs (Firebase, Twilio, Zapier)"],
            url: "http://google.com"
        }, 
        {
            name: "Jury", 
            images: ['images/resz_jury_landing_page.jpg'],
            description_text: "Don't want to get in the middle of 2 friends arguing?  Settle it with the JURY!  Want to facilitate learning and discussion by involving students outside of the classroom?  Take it to the JURY!  Holding auditions for a band or theatrical production? JURY! Can't decide what to wear today?  JURY!  The possibilities are endless!",
            features_text: ["Open new cases and post your side of the story", "Upload videos from YouTube and submit photo evidence", "Comment on each party's arguments and support their causes", "Deliberate with other jurors and and upvote/downvote others' comments", "Vote for the plaintiff or defendant and decide the winner!"],
            technology_text: ["Ruby on Rails", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "APIs (YouTube, CRON)", "Active Record"],
            url: "http://jury2.herokuapp.com"
        },
        {
            name: "Letter Stream", 
            images: ['images/resz_letterstream_pic.jpg'],
            description_text: "Hey Kids!  On the way to the Reading Rainbow, don't forget to stop by the Letter Stream and develop your skills!  Reading doesn't have to be difficult.  Letter Stream will help you read faster, be more creative, and enjoy the experience of reading a good book!",
            features_text: ["Choose the color words that you like best", "Adjust the highlighter speed to read at your own pace", "Build your imagination and write your own stories", "Upload stories you'd like to practice reading"],
            technology_text: ["Sinatra framework", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "Active Record"],
            url: "http://letterstream.herokuapp.com"
        },
        {
            name: "Tumblr-Clone", 
            images: ['images/resz_tumblr-clone-dbc.jpg'],
            description_text: "Tumblr-Clone is a social neworking app modeled after the Tumblr platform.  This was built as a personal project and used for instructional purposes to teach others how to develop web apps.",
            features_text: ["Blog about daily events", "Post multimedia content", "Follow other users", "Share your experiences!"],
            technology_text: ["Ruby on Rails", "Ruby", "Javascript", "Bootstrap", "HTML5", "CSS3", "Active Record"],
            url: "http://tumblr-clone-dbc.herokuapp.com"
        },
        {
            name: "Connect 4", 
            images: ['images/resz_connect-4.jpg'],
            description_text: "Based on the classic game board, Flizzard Connect was built as a team project at Dev Bootcamp.",
            features_text: ["Challenge your friends to a game", "Start a new game with the push of a button if you mess up before your friend can stop you", "In case you space out, the game will tell you how your opponent won"],
            technology_text: ["Javascript", "jQuery", "HTML5", "CSS3", "PHP"],            
            url: "http://connect-4-dbc.herokuapp.com"
        },
        {
            name: "Quest", 
            images: ['images/resz_quest_pic.jpg'],
            description_text: "Currently under construction, Quest (QUiz-tEST) allows students to prepare one another for their exams.  Also, teachers can spy, er I mean... see the activity of the students and use the information to plan and design lessons and review sessions.",
            features_text: ["Write questions and provide answers to classmates", "Send your questions to your classmates via Twitter", "Review your progress and see which questions you missed (and got correct!)", "Teachers can also view the activity and results"],
            technology_text: ["Ruby on Rails", "Ruby", "Javascript", "jQuery/AJAX", "HTML5", "CSS3", "APIs (YouTube, Twitter)", "Active Record"],
            url: "#"
        }
    ];