import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33043171-06b34b60f3bfebeb66d48d21f';
const params = new URLSearchParams({
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
})

async function getImages(request, page = 1) {
    const url = `${BASE_URL}/?q=${request}&page=${page}`;
    try {
        return await axios.get(url, { params });
    } catch (error) {
        Notify.failure(error.message);
        return error.message;
    }
};


export { getImages };