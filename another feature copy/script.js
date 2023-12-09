var arr = [
    {
        dp: "https://images.unsplash.com/photo-1696664754572-c8b52a7fa917?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&w=600",
        story:"https://images.unsplash.com/photo-1689778896728-3b3b2170a733?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&w=600"
    },
    {
        dp: "https://images.unsplash.com/photo-1696887350319-86341eda4b71?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600",
        story:"https://images.unsplash.com/photo-1694930102174-d6e808bbfadf?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600"
    },
    {

        dp: "https://images.unsplash.com/photo-1678523346996-1ecf1348309a?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600",
        story:"https://images.unsplash.com/photo-1674928164380-a9f089ed922b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600"
    },
    {
        dp: "https://images.unsplash.com/photo-1696887350319-86341eda4b71?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600",
        story:"https://images.unsplash.com/photo-1694930102174-d6e808bbfadf?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=600"
    },

];
// we made an array holding dp and story to be shown.
//clutter variable is defined, and we go in a loop in which each time we access one idx of arr

var stories = document.querySelector("#storyian");
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img src="${elem.dp}" alt="">
</div>` 
});
stories.innerHTML = clutter;
//now at every idx of array, we add a div into clutter and img in that div and we put above dp source in img link
//so till now we have filled clutter named variable with mutiple dps and story
//now we put that clutter in storyian and it gets visible in html


stories.addEventListener("click", function(dets){
    console.log(dets.target);
});