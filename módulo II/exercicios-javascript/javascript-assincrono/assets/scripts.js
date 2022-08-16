const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const dogBtn = document.getElementById('change-dog');


async function getDogs() {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.message;
    } catch (e) {
        console.log(e.message);
    }
}

const loadImg = async () => {
    const dogImg = document.getElementById('dog');
    dogImg.src = await getDogs();
};

dogBtn.addEventListener('click', loadImg);

loadImg();

//Solução sem try...catch
/*
const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const dogBtn = document.getElementById('change-dog');


const getDogs = async () => {
    const data = await fetch(BASE_URL)
        .then((resp) => resp.json())
        .catch((e) => console.log(e));

    return data.message;
};

const loadImg = async () => {
    const dogImg = document.getElementById('dog');
    dogImg.src = await getDogs();
};

dogBtn.addEventListener('click', loadImg);

loadImg();
*/
