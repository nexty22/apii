function download(){
  const url = document.getElementById("url").value;
  const quality = document.getElementById("quality").value;
  const result = document.getElementById("result");

  if(!url){
    result.innerHTML = "❌ Paste YouTube link";
    return;
  }

  result.innerHTML = `⏳ Processing ${quality}...`;

  fetch(`/api?url=${encodeURIComponent(url)}&quality=${quality}`)
    .then(res => res.json())
    .then(data => {
      if(data.status){
        result.innerHTML = `
          <p>${data.title}</p>
          <p>Quality: <b>${quality}</b></p>
          <a href="${data.download}" target="_blank">⬇ DOWNLOAD MP4</a>
        `;
      } else {
        result.innerHTML = "❌ Failed to fetch video";
      }
    });
}
