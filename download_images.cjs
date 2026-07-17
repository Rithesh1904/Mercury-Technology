const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  "https://www.mercurytechnology.in/assets/about-img-01-C31ERQ01.avif",
  "https://www.mercurytechnology.in/assets/about-img-02-DYt-L2OB.avif",
  "https://www.mercurytechnology.in/assets/about-img-03-DmNBUvJJ.avif",
  "https://www.mercurytechnology.in/assets/about-img-04-BkkXLh2t.avif",
  "https://www.mercurytechnology.in/assets/service-img-01-DQN4dRBO.jpg",
  "https://www.mercurytechnology.in/assets/service-img-02-BBkx-M1u.png",
  "https://www.mercurytechnology.in/assets/service-img-03-CjV36DO7.jpeg",
  "https://www.mercurytechnology.in/assets/service-img-04-DaBbM-2U.jpg",
  "https://www.mercurytechnology.in/assets/service-img-05-BYkGxCQL.jpeg",
  "https://www.mercurytechnology.in/assets/service-img-06-DO4chleS.jpeg",
  "https://www.mercurytechnology.in/assets/solution-img-01-CZ9u4oxX.avif",
  "https://www.mercurytechnology.in/assets/solution-img-02-D2h6uhDn.avif",
  "https://www.mercurytechnology.in/assets/solution-img-03-CWpgXX9c.jpg",
  "https://www.mercurytechnology.in/assets/solution-img-04-Y9KzuI8m.jpg"
];

urls.forEach(url => {
  const fileName = url.split('/').pop();
  // Strip hash from filename
  // match anything like -[a-zA-Z0-9_-]+.ext
  const simpleName = fileName.replace(/-[a-zA-Z0-9_-]+\.(avif|jpg|jpeg|png)$/, '.$1');
  const dest = path.join(__dirname, 'public', simpleName);
  
  https.get(url, (res) => {
    const fileStream = fs.createWriteStream(dest);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log('Downloaded', simpleName);
    });
  });
});
