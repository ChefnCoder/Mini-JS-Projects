var isStatus = document.querySelector(".status");
var addFriend = document.querySelector(".addFriend");
var flag=0;

addFriend.addEventListener("click", function(){
    if(flag==0)
    {
        isStatus.innerHTML="Friends";
        isStatus.style.color ="green";
        flag=1;
    }else
    {
        isStatus.innerHTML="Strangers";
        isStatus.style.color ="red";
        flag=0;   
    }
})

