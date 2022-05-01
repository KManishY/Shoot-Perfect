// `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
let searchImage = async (url) => {
      try {
            let res = await fetch(url);

            let data = await res.json();

            // console.log('data: ', data);
            return data;
      }
      catch (error) {
            console.log('error: ', error);
      }
}
let append = (data, container) => {
      data.forEach(({alt_description,urls:{small}} ) => {
            let div = document.createElement('div');
            div.setAttribute('class', "Image");
            let img = document.createElement('img');
            let h3 = document.createElement('p');
            img.src = small;
            h3.innerText = alt_description;
            let btn = document.createElement('button');
            img.addEventListener("click", function () {
                  downloadBtn(small);
            });
            btn.innerText="Download Image";
            div.append(img);
            container.append(div);

      });
}

function downloadBtn(small) {
      let imagePath = small;
      let fileName = getFileName(small);
      saveAs(imagePath, fileName);
}
function getFileName(string) {
      return string.substring(string.lastIndexOf("&") + 1);
}

export { searchImage,append};