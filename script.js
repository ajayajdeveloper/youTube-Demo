// to fetch data from api

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=mr%20beast&key=AIzaSyA3qa76g_F2kmjtciIqeNRUo66Qu8fsjNk",{
  method:'GET'
})
.then((data) => data.json())
.then(users => console.log(users))

// fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=mr%20beast&key=AIzaSyA3qa76g_F2kmjtciIqeNRUo66Qu8fsjNk",{
//   method:'GET'
// })
//   .then((data) => data.json())
//   .then((users) => {
//     const allUsers = document.querySelector(".items");
//     users.forEach((user) => {
     
//       const channelName = document.qurySelector(".video-channel-name");
//        channelName.innerHTML=items.channelId
//     }