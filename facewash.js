import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
import {show_alert} from "./scripts/alert.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();



let facewash = [
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/0/d0ffde8mnardn428.jpg',
        title: 'Man Arden Anti-Acne Neem FaceWash', price: 399, ratings: 4.9,id:5.1
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/1/81fedc4MINIM00000019.jpeg',
        title: 'Minimalist 2% Salicylic Acid + LHA Cleanser', price: 299, ratings: 4.5,id:6.1,
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/9/8904245712808_1_2.jpg',
        title: 'Nykaa Naturals Face Wash', price: 139, ratings: 4.2,id:8
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/2/62ec9125011451103863_2.jpg',
        title: 'Simple Kind To Skin Refreshing Facial Wash', price: 385, ratings: 4.7,id:13
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/5/f5af21e737534800058_1.jpg',
        title: 'Plum Green Tea Alcohol-Free Toner', price: 390, ratings: 4.5,id:9
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a6bf37c8906087770671aw__1_.jpg',
        title: 'Mamaearth Ubtan Face Wash With Turmeric', price: 249, ratings: 4.1,id:4
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/c/dcd721e737534800041_1.jpg',
        title: 'Plum Green Tea Pore Cleansing Foaming Face Wash', price: 345, ratings: 4.2,id:11
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/a/eaea13d8901138844172_1.jpg',
        title: 'Himalaya Purifying Neem Foaming Face Wash', price: 375, ratings: 4.7,id:3
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f804eadMINIM00000014_1n.jpg',
        title: 'Minimalist 3% PHA Face Toner With Multi Biotics For Minimizing Pore Size', price: 399, ratings: 4.0,id:7,
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/0/c0ad43eN_3401395376706-01.jpg',
        title: 'Bioderma Sensibio H2O Micellar Water', price: 395, ratings: 4.5,id:1
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/8/78b6563NYKMCF0000003_1.jpg',
        title: 'MCaffeine Coffee Face Wash for a Fresh & Glowing Skin', price: 349, ratings: 4.4,id:6
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a6bf37c8906087770671aw__1_.jpg',
        title: 'Mamaearth Ubtan Face Wash With Turmeric & Saffron For Tan', price: 349, ratings: 4.2,id:5
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a66f31e8901207040795_1.JPG',
        title: 'Dabur Gulabari Premium Rose Water', price: 50, ratings: 5.0,id:2
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/b/dbf221ePLUMX00000010_1.jpg',
        title: 'Plum Green Tea Pore Cleansing Face Wash', price: 495, ratings: 4.8 ,id:10
    },
    {
        url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/5/95d0ec227154_H-8901030860478.jpg',
        title: 'Ponds Pure Detox Anti-Pollution Purity Face Wash', price: 299, ratings: 4.6,id:12
    },
]

localStorage.setItem('facewashData', JSON.stringify(facewash))


//show total
let dataFace = JSON.parse(localStorage.getItem('facewashData')) || [];
let total=dataFace.length;
// console.log('total:', total)
let totalS = JSON.parse(localStorage.getItem("cart"))||[];
document.getElementById("items_count").innerText = totalS.length;

let showTotal=document.querySelector('.heading_facewashes');
showTotal.innerHTML=`Facewash (${total})`

//appending hardcode data
let carts=JSON.parse(localStorage.getItem('cart'))||[];
const appendFacewash = (data) => {
    let facewashes = document.querySelector('#products_facewash');
    facewashes.innerHTML = null;
    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'facewash'

        let image = document.createElement('img');
        image.src = el.url;

        let title = document.createElement('p');
        title.innerHTML = el.title;

        let ratings = document.createElement('p');
        ratings.innerHTML = `Ratings-${el.ratings}`;

        let price = document.createElement('p');
        price.innerHTML = `Price- ₹ ${el.price}`;

        let btn = document.createElement('button');
        btn.innerHTML = 'Add to cart';
        btn.addEventListener('click',function(){
            carts.push(el);
            localStorage.setItem('cart',JSON.stringify(carts))
            totalS = JSON.parse(localStorage.getItem("cart"))||[];
            document.getElementById("items_count").innerText = totalS.length;
        })

        div.append(image, title, ratings, price, btn)
        facewashes.append(div);
    })
}
appendFacewash(facewash);

//sorting by price

let sortByPrice = document.querySelector('#Price');

sortByPrice.addEventListener('change', () => {

    if (sortByPrice.value === 'Low to High') {
        // console.log('sortByPrice:', sortByPrice.value)
            priceLowtoHigh();
        } else if(sortByPrice.value === 'High to Low') {
        priceHightoLow();
        }else{
            appendFacewash(facewash);
        }

})

const priceLowtoHigh = () => {
    
    let sort = dataFace.sort((a, b) => {
        // console.log(a.price-b.price)
        // console.log(b.title)
        return a.price-b.price;
        
    })


    appendFacewash(sort);
    
}

const priceHightoLow = () => {
    // console.log('dataFace:', dataFace)
    let sort = dataFace.sort((a, b) => {
        // console.log(a.price-b.price)
        // console.log(b.title)
        return b.price-a.price;
        
    })

    appendFacewash(sort);
}

//sorting by Ratings

let sortByRatings = document.querySelector('#Ratings');

sortByRatings.addEventListener('change', () => {

    if (sortByRatings.value === 'Low to High') {
        // console.log('sortByRatings:', sortByRatings.value)
            ratingsLowtoHigh();
    } else if(sortByRatings.value === 'High to Low'){
            ratingsHightoLow();
    }else{
        appendFacewash(facewash);
    }

})

const ratingsLowtoHigh = () => {
    let sort = dataFace.sort((a, b) => {
        return a.ratings-b.ratings;
    })
    appendFacewash(sort);
}

const ratingsHightoLow = () => {
    let sort = dataFace.sort((a, b) => {
        return b.ratings-a.ratings;
    })
    appendFacewash(sort);
}

//sorting by Names
let sortByName = document.querySelector('#Name');
// console.log('sortByName:', sortByName.value)
sortByName.addEventListener('change', () => {

    if (sortByName.value === 'A to Z') {
        console.log('sortByName:', sortByName.value)
            namesAtoZ();
    } else {
        console.log('sortByName:', sortByName.value)
            namesZtoA();
    }

})

let title=[];

const namesAtoZ = () => {
    
    let sort = dataFace.sort((a, b) => {
        return a.id-b.id;
    })
    appendFacewash(sort);
}

const namesZtoA = () => {
    let sort = dataFace.sort((a, b) => {
        return b.id-a.id;
    })
    appendFacewash(sort);
}

// -----------------Footer Email Input------------------------

document.querySelector("#alert_btn").addEventListener("click", () => {
    show_alert();
})





