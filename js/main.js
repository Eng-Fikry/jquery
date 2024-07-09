//navbar
let width=($("nav").outerWidth()); 
$("nav i").click(function () {

    
   $("nav").css("left",-width)
   $(".icon").css("left","10px")
   console.log(width);
    
})

$(".icon").click(function () {

    
    $("nav").css("left",0)
    $(".icon").css("left",width+10)
     
 })






//toggle
$('.inner').not(".inner1").slideUp()
$(".toggle").click(function(){

    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})








//counter

let date= new Date("30 july 2024").getTime()


let counter =setInterval(function(){

    let date2=new Date().getTime() 
    let datecount=date-date2

    let days=Math.floor(datecount/(1000*60*60*24)) 

    let hours= Math.floor(datecount%(1000*60*60*24)/(1000*60*60)) 

    let minutes=Math.floor(datecount%(1000*60*60)/(1000*60)) 

    let second=Math.floor(datecount%(1000*60)/(1000)) 

    


    $(".days").html(days+"D")
    $(".hours").html(hours+"H")
    $(".minutes").html(minutes+"M")
    $(".second").html(second+"S")



},1000)








//messgage lenght

let maxlen=100
$(".form textarea").keyup(function(){
    let len= $(".form textarea").val().length
    
    console.log(len);
    let now= maxlen - len

    if(now<=0){
        $(".words").html("you end your ")

    }
    else{
        $(".words").html(now)
    }


})


