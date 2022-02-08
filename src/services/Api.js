import axios from 'axios';
const KEY = '24448107-fedb049fce312b69b088c85de';

const fetchImages = (nameImege, page) => {
  // console.log(nameImege, 'nameImage');
  // console.log(page, 'page');
  const data = axios
    .get(
      `https://pixabay.com/api/?q=${nameImege}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    )
    .then(respons => respons.data);
  return data;
};
export default fetchImages;
