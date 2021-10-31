// import React from "react";
// import "./DisplayFrame.css";
// import VidPlaceholder from "../assets/vidplaceholder.png";

// function DisplayFrame({ selecedVideo, videos}) {

//   if (videos === 0) {
//     return (
//       <div className="placeholder__wraper">
//         <iframe
//           allowFullScreen
//           className="display___iframe"
//           // width= "auto"
//           // height="auto"
//           src={VidPlaceholder}
//           title="Video player"
//         />
//         <div className="embed__vidInfo">
//           {/* <h4 className="embed__vidTitle">{selecedVideo.snippet.title}</h4>
//           <p className="embed__vidDiscrip">
//             {selecedVideo.snippet.description} */}
//           {/* </p> */}
//           <h4>Hello title</h4>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//             quo eligendi consectetur maxime qui! Ni
//           </p>
//         </div>
//       </div>
//     );
//   }
//   if (videos.lenght > 1) {
//      let videoScr = `https://www.youtube.com/embed/${videos[0].id.videoId}`;
//   } 
//   if(selecedVideo){
//   let videoScr = `https://www.youtube.com/embed/${selecedVideo.id.videoId}`;
//   }
//   let videoScr;
//   return (
//     <div className="displayFrame">
//       <div className="embed__video">
//         <iframe
//           className="display___iframe"
//           width="300"
//           height="200"
//           src={videoScr}
//           title="Video player"
//         />
//       </div>
//       <div className="embed__vidInfo">
//         <h4 className="embed__vidTitle">{selecedVideo.snippet.title}</h4>
//         <p className="embed__vidDiscrip">{selecedVideo.snippet.description}</p>
//       </div>
//     </div>
//   );
// }

// export default DisplayFrame;
