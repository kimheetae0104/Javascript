let willSmithImages = 
[
  "https://www.lovethispic.com/uploaded_...", 
  "https://media1.popsugar-assets.com/fi... /ad358e065c60f5ad56e7e8.61160339_/i/Funny-Tweets-About-Smith-Genie-Aladdin-Trailer.jpg ",
  "https://www.cliccamaqua.com.br/images...",
  "https://observatoriodocinema.uol.com....",
  "https://upload.wikimedia.org/wikipedi...",
  "https://exame.com/wp-content/uploads/...",
  "https://conteudo.imguol.com.br/c/entr...",
  "https://i0.wp.com/mixdeseries.com.br/...",
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
  const randomImg = Math.floor(Math.random() * willSmithImages.length)
  imgs[i].src = willSmithImages[randomImg];
}

const headers = document.getElementsByTagName("h2")
for (let i = 0; i < headers.length; i++) {
  headers[i].innerText = "Pedro is Awesome";
}