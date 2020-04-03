import Axios from "axios";

export default Axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3"
})

// export default Axios.create({
//     baseURL : "https://www.googleapis.com/youtube/v3",
//     params: {
//         part: "snippet",
//         maxResults: 5,
//         key:"AIzaSyDUftQ6qc-q3GUncslFTYCEm2V1r0MB1rA"
//     }
// })