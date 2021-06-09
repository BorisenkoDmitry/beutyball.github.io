let List = [
    {
        imgSrc: "images/balls.webp",
        title: "Свадьбы 1",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "weddings"
    },
    {
        imgSrc: "images/balls.webp",
        title: "Дни рождения",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "birthdays"
    },
    {
        imgSrc: "images/balls.webp",
        title: "Свадьбы 2",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "weddings"
    },
    {
        imgSrc: "images/balls.webp",
        title: "Дни рождения 2",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "birthdays"
    },
    {
        imgSrc: "images/balls.webp",
        title: "Свадьбы 4",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "weddings"
    },
    {
        imgSrc: "images/balls.webp",
        title: "8 марта",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "Womanday"
    },
    {
        imgSrc: "images/balls.webp",
        title: "8 марта",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "Womanday"
    },
    {
        imgSrc: "images/balls.webp",
        title: "8 марта",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 2000,
        category: "Womanday"
    },
    {
        imgSrc: "images/balls.webp",
        title: "День влюбленных",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 6000,
        category: "filterLoveday"
    },
    {
        imgSrc: "images/balls.webp",
        title: "День влюбленных2",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 6000,
        category: "filterLoveday"
    },
    {
        imgSrc: "images/balls.webp",
        title: "День влюбленных3",
        time: "от 1 дня до месяца",
        garant: "24 часа",
        size: "25см",
        price: 6000,
        category: "filterLoveday"
    }


    
]

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

let catalogList = shuffle(List);
