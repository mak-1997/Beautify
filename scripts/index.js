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