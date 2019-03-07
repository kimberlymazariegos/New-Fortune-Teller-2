
$(".btn1").click(function(){//When .btn1 is clicked the function will activate//
    var A = $(".One").val(); //The variable A is being declared with an imput of ".One" //
    console.log(A); //The console.log has a value of A //
    $(".A").text(A); //When the input of ".A" goes into effect, the text A will appear //
    
    var B = $(".Two").val(); //The variable B is being declared with an imput of ".Two" //
    console.log(B);//The console.log has a value of B //
    $(".B").text(B);//When the input of ".B" goes into effect, the text B will appear //

    var C = $(".Three").val(); //The variable C is being declared with an imput of ".Three" //
    console.log(C);//The console.log has a value of C //
    $(".C").text(C);//When the input of ".C" goes into effect, the text C will appear //

    var D= $(".Four").val(); //The variable D is being declared with an imput of ".Four" //
    console.log(D);//The console.log has a value of D //
    $(".D").text(D);//When the input of ".D" goes into effect, the text D will appear //

    var E= $(".Five").val(); //The variable E is being declared with an imput of ".Five"//
    console.log(E);//The console.log has a value of E //
    $(".E").text(E);//When the input of ".E" goes into effect, the text E will appear//

    var Four = parseInt($(".Four").val());//The variable Four is declared and the parseInt with an imput of ".Four" activates it's given value//
    
    var Five = $(".Five").val();//The variable Five is being declared with an imput of ".Five" //
    console.log();//The console.log has no value //
    $(".E").text(500+Four); //When the input of ".E" goes into effect, the calculation of the text appears//
});