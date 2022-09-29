
import {footer} from "/components/footer.js"
import {inner,navbar} from "/components/navbar.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();


let img_arr = [
    {"url" : "https://images-static.nykaa.com/uploads/a261ed0b-bb88-404e-b423-b40072fb814c.jpg?tr=w-600,cm-pad_resize" },
    {"url" : "https://images-static.nykaa.com/uploads/1ca076b5-bb28-42e1-8c90-518afdb5d385.jpg?tr=w-1200,cm-pad_resize"},
    {"url" : "https://images-static.nykaa.com/uploads/298b3298-78f4-40f1-a678-ce766834a470.jpg?tr=w-600,cm-pad_resize" },
    {"url" : "https://images-static.nykaa.com/uploads/32c9beff-819f-4195-ba79-9247edc49791.jpg?tr=w-600,cm-pad_resize" },
    {"url" : "https://images-static.nykaa.com/uploads/be5e2237-abe2-4fba-810d-d3780ea32298.jpg?tr=w-600,cm-pad_resize" },
    {"url" : "https://images-static.nykaa.com/uploads/5950adfb-71b2-4016-ac98-badd764f9323.jpg?tr=w-1200,cm-pad_resize"},
    {"url" : "https://images-static.nykaa.com/uploads/0bd0130b-3270-4b06-9a5e-05a8bef3e139.jpg?tr=w-1200,cm-pad_resize"}           
];
console.log(img_arr[0].url)
let start_slide_show = (event,img_arr) =>{
    event.preventDefault();
    let slide_div = document.querySelector("#sliding_guide");
    slide_div.innerHTML = null;

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let i = 0;
    img1.src = img_arr[i].url;
    i++;
    slide_div.append(img1);
    img2.src = img_arr[i].url;
    i++;
    slide_div.append(img2);
    let start = setInterval(() => {
        if(i == img_arr.length){
            i = 0;
        }
        img1.src = img_arr[i].url;
        i++;
        slide_div.append(img1);
        if(i == img_arr.length){
            i = 0;
        }
        img2.src = img_arr[i].url;
        i++;
        slide_div.append(img2);
    },3000)
};

window.addEventListener("load", (event) =>{
    start_slide_show(event,img_arr);
})

function herosliding () {

let hero_arr = [
    "https://images-static.nykaa.com/uploads/1129b7ba-618a-4a19-9a7e-1f87e70c8c79.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/402d2004-67b4-4d20-98cf-238a87f7bee0.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4bcce2bf-6fb5-475b-8837-a8496a93dd36.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b15d2f8f-f4a8-484b-b8b5-13d5dafc68d1.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/78092956-54be-4493-b6e0-4651491abe62.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/22171517-6334-4d51-97ed-4db8d388e79f.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/18d88d0a-e591-45ce-a9e1-e12054baac28.jpg?tr=w-1200,cm-pad_resize"
];

let i=0;
let div = document.getElementById("hSlider");
let picture = document.createElement("img");
picture.src = hero_arr[0];

div.append(picture)
i = i + 1;

setInterval(function () {
    if( i == 7) {
        i = 0
    }
    picture.src = hero_arr[i];
    div.append(picture)

},2000)

}

herosliding();




function herosliding2 () {

    let hero2_arr = [
        "https://images-static.nykaa.com/uploads/1fbca9b2-90a5-412d-bccd-122ab840b956.png?tr=w-2400,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/32e9cc60-fada-4517-8c3d-c0a16d8f6361.jpg?tr=w-2400,cm-pad_resize"
    ];
    
    let i=0;
    let div2 = document.getElementById("hSlider2");
    let picture2 = document.createElement("img");
    picture2.src = hero2_arr[0];
    
    div2.append(picture2)
    i = i + 1;
    
    setInterval(function () {
        if( i == 2) {
            i = 0
        }
        picture2.src = hero2_arr[i];
        div2.append(picture2)
    
    },1500)
    
    }
    
    herosliding2();


    function herosliding3 () {

        let hero3_arr = [
            "https://images-static.nykaa.com/uploads/67ab467e-3ee0-4507-8be0-e1833c30ccac.jpg?tr=w-1200,cm-pad_resize",
            "https://images-static.nykaa.com/uploads/5b47c37e-e0fe-47d7-9c60-f719ff6e75d3.jpg?tr=w-1200,cm-pad_resize"
        ];
        
        let i=0;
        let div3 = document.getElementById("hSlider3");
        let picture3 = document.createElement("img");
        picture3.src = hero3_arr[0];
        
        div3.append(picture3)
        i = i + 1;
        
        setInterval(function () {
            if( i == 2) {
                i = 0
            }
            picture3.src = hero3_arr[i];
            div3.append(picture3)
        
        },1000)
        
        }
        
        herosliding3();


let trendArr = [
    {"url" : "https://images-static.nykaa.com/uploads/faedd542-fa40-4179-afab-d9a71b5a684f.jpg?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/ac99be64-68ff-4afd-92d2-98e9b4df2b50.png?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/5481cb5e-c36b-4e07-bb52-b81282e3e3b4.jpg?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/16776307-9707-49f4-bb36-8e6b549b54fd.jpg?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/39e22999-1d18-4cd4-8cd9-ca3c82d7eee7.jpg?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/7cd2eeae-f276-48e0-8586-bfbb304d6043.jpg?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/5e9c007c-9b44-4485-b8cd-b9cf1adfe49c.png?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/96b20db6-e6b1-4576-a7c8-314de6d7fa67.png?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/a8d2592a-0de3-42b0-87d9-32f163a86f50.png?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/4bf7f0f9-3075-4a43-bd5d-c78f618c3eed.png?tr=w-400,cm-pad_resize"},
        {"url" : "https://images-static.nykaa.com/uploads/2c0525c9-8511-4a24-8cbc-4c386df3fd81.jpg?tr=w-400,cm-pad_resize"} 
];

const appendnykaaTrending = (data) => {
    let nT = document.querySelector('#nykTrend');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'categories'
        let image = document.createElement('img');
        image.src = el.url;

        div.append(image)
        nT.append(div);
    })
}
appendnykaaTrending(trendArr);




let bestsellers = [
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd037fb773602040605_0.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904330900707_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/2/320deadMINIM00000008_1n.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/7/a72310aestee00000043_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/3/333efedNYKAC00000370_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/d/3d232868901526403868_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/a/8a541fbDOTKE00000054-1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/7/774617eVICTO00000017-1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/2/925e4d14005808427048_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/m/i/mini5.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/6/a6bf37c8906087770671aw__1_.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/0/8005610639161_8_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/b/2b220b2885190822126_text.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/2/425c7038411061819838_1.jpg"},
    {"url" : "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/e/ae303ddDYSON00000036_1.jpg"}
];







const appendBest = (data) => {
    let best_seller = document.querySelector('#best_seller');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'best'

        let image = document.createElement('img');
        image.src = el.url;

        let title = document.createElement('p');
        title.innerHTML = el.title;

        let ratings = document.createElement('p');
        ratings.innerHTML = el.ratings;

        let price = document.createElement('p');
        price.innerHTML = `₹ ${el.price}`;

        let btn = document.createElement('button');
        btn.innerHTML = 'Add to cart';

        div.append(image,title,ratings,price,btn)
        best_seller.append(div);
    })
}
appendBest(bestsellers);
