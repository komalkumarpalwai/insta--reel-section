// data
// function createacard(on,off,video, username, follow, likes, comments, share) {
//   let html = `
//   <i class="ri-volume-down-line on" id="${on}"></i>
//   <i class="ri-volume-mute-line off" id="${off}"></i> 
//   <video src="${video}" autoplay infinite loop id="video"></video>
//   <div class="belowcontent">
//       <div class="detalis">
//           <div class="userlogo"></div>
//           <div class="username"><h5>${username}</h5></div>
//           <div class="follotbtn"><h5>${follow}</h5></div>
//       </div>
//   </div>
  
// <div class="options">
// <i class="ri-heart-line"><p>${likes}</p></i>
// <i class="ri-chat-1-line"><p>${comments}</p></i>
// <i class="ri-send-plane-line"><p>${share}</p></i>
// <i class="ri-save-line"><p></p></i>
  
//   `;
//   document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
// }

// createacard("on","off","soul.mp4", "komalreddy", "following", 400, 400, 400);

let onButton = document.querySelector("#on");
let offButton = document.querySelector("#off");
let video = document.getElementById("video");

onButton.addEventListener("click", function() {
  onButton.style.display = "none";
  offButton.style.display = "flex";
  video.muted = true;
});

offButton.addEventListener("click", function() {
  onButton.style.display = "flex";
  offButton.style.display = "none";
  video.muted = false;
});
let like=document.querySelector("#like")
like.addEventListener("click",function()
{
  like.style.color="red"
})
video.addEventListener("dblclick",function()
{
  like.style.color="red"
})

let savereel=document.getElementById("savereel")
let saved=document.querySelector(".saved")
savereel.addEventListener("click",function ()
{
  saved.style.display = "flex";
  setTimeout(function () {
    saved.style.display = "none";
  }, 3000);

})