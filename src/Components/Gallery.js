// import React from "react";
// import "./gallery.css";
// const Gallery = () => {
//   return (
//     <div className="gallerycontainer">
//       <h1>Gallery</h1>
//       <div id="photo-gallery-wrapper">
//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="1"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1507286583315-d69ec6ad4564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBpbnNpZGUlMjB2aWV3fGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="2"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="3"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="4"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="7"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1630582837298-49d1927726e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore
//             et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="6"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1554009975-d74653b879f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore
//             et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="5"
//             class="responsive-galllery-photo"
//             src="https://plus.unsplash.com/premium_photo-1687995672195-0676a1e1d4f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure>
//           <img
//             alt="8"
//             class="responsive-galllery-photo"
//             src="https://plus.unsplash.com/premium_photo-1687960116802-a9a05891d33f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhvdGVsfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//             nisi ut aliquip ex ea commodo consequat.
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="9"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1621494547944-5ddbc84514b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBkaW5uaW5nfGVufDB8fDB8fHww"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore
//             et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="10"
//             class="responsive-galllery-photo"
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="11"
//             class="responsive-galllery-photo"
//             src="https://images.unsplash.com/photo-1584536301769-0c5c357941db?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwZGlubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore
//             et dolore magna aliqua
//           </figcaption>
//         </figure>

//         <figure class="responsive-photo-gallery-figure">
//           <img
//             alt="12"
//             class="responsive-galllery-photo"
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg"
//           />
//           <figcaption>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit
//           </figcaption>
//         </figure>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
