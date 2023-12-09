var elem = document.querySelectorAll(".elem");
// from querry selector all we chose all element, so jispe hover kiye thats on choose
//for each loop access each element
elem.forEach(function(val){

    //val is the elem in action
    //when mouse entered there this funcn will execute
    //we gave image opacity as 1 by accessing through child node
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity="1";
    })
    // when mouse left again opacity back to 0
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity="0";
    })


    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px";
        val.childNodes[3].style.top = dets.y+"px";
         })
})
