$(document).ready(function () {

    // 
        var randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);
         $(".show_marks").text(randomNumber);

    // 
         var mag1 = Math.floor(Math.random() * 11 + 1);
         var mag2 = Math.floor(Math.random() * 11 + 1);
         var mag3 = Math.floor(Math.random() * 11 + 1);
         var mag4 = Math.floor(Math.random() * 11 + 1);


        var totalScore= 0;
        var gameTotal = 0;
        var win = 0;
        var loss = 0;

         $(".win").text(win);
         $(".loss").text(loss);
         $(".final").text(gameTotal);

    function setup() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);
        $(".show_marks").text(randomNumber);

         mag1 = Math.floor(Math.random() * 11 + 1);
         mag2 = Math.floor(Math.random() * 11 + 1);
         mag3 = Math.floor(Math.random() * 11 + 1);
         mag4 = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
         gameTotal = 0;
        $(".final").text(gameTotal);
    }

    function hala(){
        alert("WOHOOOO,YOU WON!");
        win++;
        $(".win").text(win);
        
        setup();
    }

    function dupe(){

        alert ("UH, you lost!");
        loss++;
         $(".loss").text(loss);
        
        setup();
    
    }

    //
    $(".magic").on("click",function(){

        totalScore = totalScore + mag1
        
        $(".final").text(totalScore);

        if (totalScore==randomNumber){
            hala();
        }

        else if (totalScore > randomNumber){
            dupe();
        }
      
    })

    $(".magic1").on("click",function(){

        totalScore = totalScore + mag2
        $(".final").text(totalScore);
        if (totalScore==randomNumber){
            hala();
        }
    
        else if (totalScore > randomNumber){
        dupe();
        }
    })

    $(".magic2").on("click", function(){
        totalScore = totalScore+ mag3
        $(".final").text(totalScore);

        if (totalScore==randomNumber){
            hala();
        }
        else if (totalScore > randomNumber){
            dupe();
        }


    })

    $(".magic3").on("click", function(){
        totalScore = totalScore + mag4
        $(".final").text(totalScore);

        if (totalScore==randomNumber){
            hala();
        }
        else if (totalScore > randomNumber){
            dupe();
        }
        console.log (totalScore);

    })
    


});
