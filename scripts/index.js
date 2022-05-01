// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=bvWgMt-UVBqrFgnna6j_PelRD6FJFQyszhacc4Nb3PA

// https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=bvWgMt-UVBqrFgnna6j_PelRD6FJFQyszhacc4Nb3PA
let read = (ids) => {
      return document.getElementById(ids);
}
const API = "bvWgMt-UVBqrFgnna6j_PelRD6FJFQyszhacc4Nb3PA";

import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchImage, append } from "./fetch.js"

const url1 = `https://api.unsplash.com/search/photos/?query=wallpapers&order_by=popular&orientation=portrait&per_page=100&client_id=${API}`;
searchImage(url1).then((data) => {
      append(data.results,container);
})
let search = (e) => {
      if (e.key === "Enter") {
            let value = document.getElementById("query").value;
            searchImage(API, value).then((data) => {
                  console.log(data)
                  let container = document.getElementById("container");
                  container.innerHTML = null;
                  append(data.results, container);
           })
      }
}

document.getElementById("query").innerHTML = addEventListener("keydown", search);

let categories = document.getElementById("category").children;
// console.log('categories: ', categories);



function cSearch(){
      console.log(this.id);
      const url = `https://api.unsplash.com/search/photos/?query=${this.id}&order_by=popular&orientation=portrait&per_page=60&client_id=${API}`;
      searchImage(url).then((data) => {
            console.log('data: ', data);
            let container = read("container");
            container.innerHTML = null;
            append(data.results,container);

      })
      
      
      
      // searchImage(API, value, this.id).then((data) => {
      //       console.log(data);
      //       let container = document.getElementById("container");
      //       container.innerHTML = null;
      //       append(data.results, container);
      // });

}

for (let el of categories) {
      el.addEventListener("click", cSearch);
}


//---------------------------------------------------------------------------
// let searchImage = async () => {
//       let query = document.getElementById("query").value;
//       try {
//             let res = await fetch(
//                   ` https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//             );
//             let data = await res.json();
//             console.log('data: ', data);

//       }
//       catch (error) {
//             console.log('error: ', error);
//       }
// };