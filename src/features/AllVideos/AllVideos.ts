

const apiKey :string = import.meta.env.VITE_YOUTUBE_URI
const url:string = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet,id&maxResults=20`;

function fetchAllVideos(){
  apiKey === "AIzaSyBjdQGzl8h8dYpKh3npf-qTb6oKuAJAmpU" ? console.log("true") : console.log("false");
  return fetch(url)
}


export default fetchAllVideos