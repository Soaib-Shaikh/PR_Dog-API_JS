const loader = document.querySelector('.loader');
const img = document.querySelector('#dog_img');

const API_URL ='https://dog.ceo/api/breeds/image/random';

const handleDogApi = () => {
    loader.style.display = 'block';
    img.style.display = 'none';

    setTimeout (()=>{
        fetch(API_URL,{
            method: 'GET',
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            loader.style.display ='none';
            img.style.display ='block';
            img.src = data.message;
        })
        .catch((err)=>{
            console.error(err.message);
        })
    },1000)
};

handleDogApi();