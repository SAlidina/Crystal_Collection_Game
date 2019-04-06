$(document).ready(function(){
    var winsTotal = 0;
    var lossesTotal = 0;
    var targetScore = 0;
    var currentScore = 0;
    var crystal1Value = 0;
    var crystal2Value = 0;
    var crystal3Value = 0;
    var crystal4Value = 0;

    function initialize() {
        currentScore = 0;
        targetScore = Math.floor(Math.random() * 120) + 19;

        //console.log("targetScore = " + targetScore);

        crystal1Value = Math.floor(Math.random() * 12) + 1;
        crystal2Value = Math.floor(Math.random() * 12) + 1;
        crystal3Value = Math.floor(Math.random() * 12) + 1;
        crystal4Value = Math.floor(Math.random() * 12) + 1;

        while (crystal2Value == crystal1Value
            || crystal2Value == crystal3Value
            || crystal2Value == crystal4Value
            || crystal1Value == crystal4Value
            || crystal4Value == crystal3Value) {
            crystal1Value = Math.floor(Math.random() * 12) + 1;
            crystal2Value = Math.floor(Math.random() * 12) + 1;
            crystal3Value = Math.floor(Math.random() * 12) + 1;
            crystal4Value = Math.floor(Math.random() * 12) + 1;
        }

        $("#targetScore-box").html("<p>Target Score: " + targetScore + "</p>");
        //console.log("crystal1Value = " + crystal1Value);
        //console.log("crystal2Value = " + crystal2Value);
        //console.log("crystal3Value = " + crystal3Value);
        //console.log("crystal4Value = " + crystal4Value);
    }
    
    /**
     * Checks the function on whether you've won or not, 
     * compares the current score to the targeted score,
     * updates values for display
     */
    function checkPlease() {
        if (targetScore == currentScore) {
            winsTotal++;
            alert("Prismatic!");
            initialize();
        }
        else if (targetScore < currentScore) {
            lossesTotal++;
            alert("Of all the facets, you chose this one");
            initialize();
        }
        $("#currentScore-box").html("<p>Current Score: "+currentScore+"</p>");
        $("#wins-box").html("<p>Wins: "+winsTotal+"</p>");
        $("#loss-box").html("<p>Losses: "+lossesTotal+"</p>");
    }


    $("#crystal1ValueButton").click(function(){
        currentScore += crystal1Value;
        checkPlease();
    });
    $("#crystal2ValueButton").click(function(){
        currentScore += crystal2Value;
        checkPlease();
    });
    $("#crystal3ValueButton").click(function(){
        currentScore += crystal3Value;
        checkPlease();
    });
    $("#crystal4ValueButton").click(function(){
        currentScore += crystal4Value;
        checkPlease();
    });

    initialize();

});