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

//create data categories
const categories = [
    {
        image : "https://images-static.nykaa.com/uploads/c4ebdb12-7b5c-456f-a64a-cb05cad5ebea.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/bfcae510-6cb7-4367-8633-58756fc3387d.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/bfcae510-6cb7-4367-8633-58756fc3387d.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/88cfd436-4419-4a48-8f6e-07285d4f5aff.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/0fcc7efb-ec2c-494f-aae1-95691760d0a7.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/1d0bb453-0408-4c40-96da-2d4b586b747f.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/64a2a8ee-3796-42c1-a8e3-3633f05bbbb1.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/fa4522d8-e9b9-4505-9b2a-e3a43f315bf0.png?tr=w-200,cm-pad_resize"
    },
    {
        image : "https://images-static.nykaa.com/uploads/90833831-e82f-4576-a612-4e6012d8b8f6.png?tr=w-200,cm-pad_resize"
    },
]
const cate =(categories)=>{
    document.querySelector("#topcategories").innerHTML="";
    categories.forEach(e => {
        let div= document.createElement("div")
        let img = document.createElement("img")
        img.src=e.image
    div.append(img);
    document.querySelector("#topcategories").append(div)
    });
}
cate(categories)


