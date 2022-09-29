
let topCategories = [
    { url: 'https://images-static.nykaa.com/uploads/c4ebdb12-7b5c-456f-a64a-cb05cad5ebea.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/bfcae510-6cb7-4367-8633-58756fc3387d.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/5cb290f6-40c9-45b1-9f1a-27e13055cec6.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/88cfd436-4419-4a48-8f6e-07285d4f5aff.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/0fcc7efb-ec2c-494f-aae1-95691760d0a7.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/1d0bb453-0408-4c40-96da-2d4b586b747f.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/64a2a8ee-3796-42c1-a8e3-3633f05bbbb1.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/fa4522d8-e9b9-4505-9b2a-e3a43f315bf0.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/90833831-e82f-4576-a612-4e6012d8b8f6.png?tr=w-200,cm-pad_resize' },

]

let bestSeller = [
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/6/56d0c3a4005808231423_1.jpg', title: 'NIVEA Men Face Wash, Dark Spot Reduction',ratings:4.0,price:110},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/0/e03b7c18906084791198_1.jpg', title: 'Beardo De-Tan Bodywash For Men' ,ratings:4.8,price:250},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/f/efc57308904223818614_1.jpg', title: 'Ustraa Beard Growth Oil with Redensyl' ,ratings:4.2,price:399},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/4/9/4902430917520_1.jpg', title: 'Gillette Mach 3 Shaving Razor',ratings:4.1,price:385 },
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/7/97c52ce3562700373145_0.jpg', title: 'Jaguar Classic Black Eau De Toilette' ,ratings:4.2,price:3300},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/v/e/versace_dylanblue_30ml_bottle_1.jpg', title: 'Versace Pour Homme Dylan Blue',ratings:4.4 ,price:3350},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/7/57c37308904223818706_1.jpg', title: 'Ustraa Hair Growth Vitalizer , Jojoba Oil' ,ratings:4.0,price:699},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/5/95b4994748927060027_1.jpg', title: 'Optimum Nutrition (ON) Gold Standard 100% Whey' ,ratings:4.1,price:3899},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/7/27fdd6fPHIAA00000028_00.jpg', title: 'Philips BT1232/15 Skin-friendly Beard Trimmer',ratings:4.3,price:945 },
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/9/59f542c86800687900_1.jpg', title: 'Neutrogena UltraSheer Dry Touch Sunblock SPF 50+' ,ratings:4.6,price:675},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/2/92afc2aNYKAB00000145_1.jpg', title: 'Nykaa Wanderlust Shower Gel - Activated Charcoal' ,ratings:4.7,price:350},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8907367000983_tmc_3.jpg', title: 'The Man Company Argan & Geranium Beard Oil' ,ratings:4.0,price:350},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/0/a0002f68904330600119_apr1.jpg', title: 'Bombay Shaving Company Charcoal Shaving Foam' ,ratings:4.5,price:245},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/0/f0030e8888066075138_1.jpg', title: 'Tom Ford Ombre Leather la Perfume' ,ratings:4.9,price:8500},
    { url: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/c/dccfe053616301794608_1.jpg', title: 'Gucci Guilty Perfume Pour Home For Him',ratings:4.7,price:11650 },

]

let concernData = [
    { url: 'https://images-static.nykaa.com/uploads/2bb534a6-bc93-42ed-b18f-a5030a28ba02.jpg?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/f54b76b8-98f2-4344-a758-dc5284dfcf52.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/3e73c881-e114-43ac-bed4-ad5e20f63088.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/e595716a-0342-4085-a39d-9f0cc5733d01.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/4bea8251-115d-450b-a8ac-c5beddd661ce.png?tr=w-200,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/175819c2-068d-4fa9-acab-6f90f28f84a0.jpg?tr=w-200,cm-pad_resize' },
]

let budget_buy = [
    { url: 'https://images-static.nykaa.com/uploads/2a74efb9-f482-42ab-aa66-f625b6d7c683.jpg?tr=w-240,cm-pad_resize', title: 'Facewashes', range: 399 },
    { url: 'https://images-static.nykaa.com/uploads/d738c9b4-9dcc-439f-8a6b-b557c54b2f73.jpg?tr=w-240,cm-pad_resize', title: 'Deodorants', range: 299 },
    { url: 'https://images-static.nykaa.com/uploads/712932b9-fecb-4570-a6d7-576990366283.jpg?tr=w-240,cm-pad_resize', title: 'Whey Protein', range: 1999 },
    { url: 'https://images-static.nykaa.com/uploads/eec97439-f38f-4352-bb1b-46e704ced4ea.jpg?tr=w-240,cm-pad_resize', title: 'Body Wash & Shower Gels', range: 299 },
]

let new_Launches = [
    { url: 'https://images-static.nykaa.com/uploads/da72bf38-6ce3-4d3e-bd1b-ff93338e89ab.jpg?tr=w-600,cm-pad_resize' },
    { url: 'https://images-static.nykaa.com/uploads/19655ee0-480b-4cd0-8545-8454199f6283.jpg?tr=w-600,cm-pad_resize' },
]



const appendCategories = (data) => {
    let top_cat = document.querySelector('#top_categories');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'categories'
        let image = document.createElement('img');
        image.src = el.url;

        div.append(image)
        top_cat.append(div);
    })
}
appendCategories(topCategories);

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
appendBest(bestSeller);

const appendConcern = (data) => {
    let shop_concern = document.querySelector('#shop_concern');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'concern'
        let image = document.createElement('img');
        image.src = el.url;

        div.append(image)
        shop_concern.append(div);
    })
}
appendConcern(concernData);


const appendBudget = (data) => {
    let budget = document.querySelector('#budget_buy');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'budget'
        let image = document.createElement('img');
        image.src = el.url;

        let title = document.createElement('h3');
        title.innerHTML = el.title;

        let price = document.createElement('p');
        price.innerHTML = `Under ₹ ${el.range}`;

        div.append(image, title, price)
        budget.append(div);
    })
}
appendBudget(budget_buy);

const appendLaunches = (data) => {
    let new_launch_item = document.querySelector('#launches');

    data.forEach(el => {

        let div = document.createElement('div');
        div.className = 'launch'
        let image = document.createElement('img');
        image.src = el.url;

        div.append(image)
        new_launch_item.append(div);
    })
}
appendLaunches(new_Launches);

//sliding image function
const slidewindow=()=>{
    let arr = ["https://images-static.nykaa.com/uploads/32fe6b48-b189-41eb-af0d-12d1edc08901.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/861b0948-8e08-42f9-98bf-529b37388b5d.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/be1eda0f-fd12-4830-91e0-ef92d7680c81.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/4b137c91-cd8b-4f15-8edd-bdeb97163970.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/1845d1c4-40a1-4b11-8501-5b54ce0e1303.jpg?tr=w-1200,cm-pad_resize","https://images-static.nykaa.com/uploads/c73b7deb-3151-4fe7-93f5-ed64592a6191.jpg?tr=w-1200,cm-pad_resize"]
            let div = document.querySelector("#slide");
            div.innerHTML=null;
            let i=0;
            let image=document.createElement("img");
            image.src = arr[0];
            div.append(image)
            i++;
    
            id = setInterval(function () {
                if (i===6) {
                    i=0;
                }
                image.src=arr[i];
    
                div.append(image); 
    
                i++
            },3000)
        }
slidewindow()

//create data brands
const brands = [
    {
        image:"https://images-static.nykaa.com/uploads/3dcee8da-32b6-45ed-b23a-afbe3cc12372.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 30% OFF",
        p2:"Pamper the #Gentleman InYou"
    },
    {
        image:"https://images-static.nykaa.com/uploads/c7510dea-2e70-41c0-8f0d-2692023ccee8.jpg?tr=w-240,cm-pad_resize",
        p1:"Starting at ₹500+",
        p2:"Affordable Skincare Backed by Science"
    },
    {
        image:"https://images-static.nykaa.com/uploads/71ad38a7-b8be-4944-8267-e4d9fcab4c6e.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 30% OFF",
        p2:"On Garnier Men's Bestsellers"
    },
    {
        image:"https://images-static.nykaa.com/uploads/655b09ff-0773-4a29-91e3-74261319c2e6.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 30% OFF",
        p2:"India’s First Caffeinated Brand"
    },
    {
        image:"https://images-static.nykaa.com/uploads/70086ae0-f6f0-4655-b42b-a55c03a2d618.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 10% OFF",
        p2:"On Hair Care Regime"
    },
    {
        image:"https://images-static.nykaa.com/uploads/ebdbc8fc-e829-48f9-a84d-831cc14cabbd.jpeg?tr=w-240,cm-pad_resize",
        p1:"Up To 20% OFF",
        p2:"Shop Men's Fragrance, Body Care & More"
    },
    {
        image:"https://images-static.nykaa.com/uploads/32cb6a66-69c9-45a0-a71e-baeb25c24294.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 20% OFF",
        p2:"Leading Whey Protein"
    },
    {
        image:"https://images-static.nykaa.com/uploads/1874dfb0-c8ea-4252-a2d7-92b9fbcda338.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 40% OFF",
        p2:"Rediscover The Art of Shaving"
    },
    {
        image:"https://images-static.nykaa.com/uploads/b728b001-545c-4b89-a5a3-abda6eac7a74.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 50% OFF",
        p2:"Stay Dandruff Free"
    },
    {
        image:"https://images-static.nykaa.com/uploads/b469a486-abbb-47bf-b9b7-38df266f16ee.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 45% OFF",
        p2:"Fuel Your Workouts with MuscleBlaze"
    },
    {
        image:"https://images-static.nykaa.com/uploads/08a0f6d2-3aa4-421e-888e-9919be849d47.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 40% OFF",
        p2:"Unleash the #HairyMusculinity"
    },
    {
        image:"https://images-static.nykaa.com/uploads/117cef9d-edb1-4cbe-b267-5ae384b29257.jpg?tr=w-240,cm-pad_resize",
        p1:"Up To 30% OFF",
        p2:"Ustraa Hai Toh Swag Hai!"
    }
]

const app =(brands)=>{
    document.querySelector("#topbrand_grid").innerHTML="";
    brands.forEach(e => {
        let div= document.createElement("div")
        // div.id="topbrand_grid"

        let img = document.createElement("img")
        img.src=e.image

        let h4 = document.createElement("h4")
        h4.innerHTML=e.p1

       let p2 = document.createElement("p")
        p2.innerHTML=e.p2
    div.append(img,h4,p2);
    document.querySelector("#topbrand_grid").append(div)
    });
}
app(brands)

