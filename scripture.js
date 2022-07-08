/*
Generates a random verse from the verses array
*/
angular.module("myApp", [])
   
  .controller("ctrl", function($scope) {

    //lists of verses
    var verses = [
      "Genesis 2:24",
      "Exodus 20:13",
      "Exodus 20:15",
      "1 Timothy 4:12",
      "1 Chronicles 16:11",
      "Psalm 56:3",
      "Psalm 118:24",
      "Psalm 119:105",
      "Proverbs 1:7",
      "Proverbs 3:6",
      "Proverbs 3:7",
      "Proverbs 4:23",
      "Proverbs 13:20",
      "Proverbs 16:3",
      "Proverbs 16:9",
      "Proverbs 27:17",
      "Jeremiah 29:11",
      "Matthew 5:14",
      "Matthew 11:30",
      "Matthew 19:19",
      "John 3:16",
      "John 10:10",
      "John 11:35",
      "Acts 16:31",
      "Romans 10:10",
      "Romans 10:13",
      "1 Corinthians 6:20",
      "1 Corinthians 16:14",
      "Ephesians 5:25",
      "Philippians 4:13",
      "Philippians 4:19",
      "Colossians 3:19",
      "Colossians 3:20",
      "1 Timothy 4:12",
      "2 Timothy 1:7",
      "Hebrews 11:1",
      "Hebrews 13:8",
      "1 John 1:9",
      "1 John 4:19",
      "1 John 5:3",
      ];

    //random verse
    var randomVerse = verses[Math.floor(Math.random()*verses.length)];

    //gets a new random verse when called
    function rndVerse(){
      randomVerse = verses[Math.floor(Math.random()*verses.length)];
    }

    //replaces the h2 text with a random verse from the scriptures array and resets
    let displayingVerse = false;
    
    $scope.scripture = function(){
      displayingVerse = true;
      while (showVerse == true) {
        console.log(randomVerse);
        $scope.h2Text = " ";
        $scope.h2Text = randomVerse;
        displayingVerse = false;
        rndVerse();
      }
    }
    
    //initial display screen text
    $scope.sword = "\u{2694}";
    $scope.h1Text = "SWORD DRILL";
    $scope.h2Text = "Bible Verse Generator";
    
    //erases the text in #displayText
    $scope.vanish = function() {
      $scope.sword = " ";
      $scope.h1Text = " ";
    }
  });