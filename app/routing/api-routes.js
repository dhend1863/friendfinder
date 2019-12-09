const friends = require("../data/friends.js");

module.exports = function (app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    const bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    // Takes Result of users survery POST and parse it

    const userData = req.body;
    const userScores = userData.scores;

    console.log(userScores);

    // Variable will calculate the difference between users score and scores of characters

    const totalDiffernce = 0;

    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i]);
      totalDifference = 0;

      // Loop through all the scores of characters
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j])) - parseInt(friends[i].scores[j]);

        if (totalDifference <= bestMatch.friendDifference) {

          // Reset BestMatch to be the new friend
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDiffernce;
        }
      }
    }

    // Save user data to database. Database will return users best friend
    friends.push(userData);

    res.json(bestMatch);

  });

}










