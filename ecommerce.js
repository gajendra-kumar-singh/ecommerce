let shopsBox1 = document.querySelector(".shops-box-1");
let shopsBox2 = document.querySelector(".shops-box-2");
let shopsBox3 = document.querySelector(".shops-box-3");
let shopsBox4 = document.querySelector(".shops-box-4");
let shopsBox5 = document.querySelector(".shops-box-5");
let shopsBox6 = document.querySelector(".shops-box-6");
let heroSection  = document.querySelector(".herosection");
let shops = document.querySelector(".shops");
let blogs = document.querySelector(".blogs");
let shopsGirl = document.querySelector(".shops-girl")
let body = document.querySelector("body");

shopsBox1.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('Shirt.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$11";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsGirl.style.display="block";
        shopsBox1.style.display="block";
    })
});

shopsBox2.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('t-Shirt.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$9";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsBox1.style.display="block";
    })
});

shopsBox3.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('pant.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$20";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsGirl.style.display="block";
        shopsBox1.style.display="block";
    })
});

shopsBox4.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('women-top.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$10";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsGirl.style.display="block";
        shopsBox1.style.display="block";
    })
});

shopsBox5.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('women-tshirt.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$15";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsGirl.style.display="block";
        shopsBox1.style.display="block";
    })
});

shopsBox6.addEventListener("click",function(){
    //none properties
    heroSection.style.display = "none";
    shops.style.display = "none";
    shopsGirl.style.display= "none";
    blogs.style.display= "none";

    //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv);
    mainDiv.style.height="500px";
    mainDiv.style.width="100%";
    // mainDiv.style.backgroundColor="red";
    mainDiv.style.marginTop="100px";
    mainDiv.style.display="flex";

    //divleft styling
    let divLeft = document.createElement("div");
    mainDiv.appendChild(divLeft);
    divLeft.style.height="550px";
    divLeft.style.width="50%";
    // divLeft.style.backgroundColor="blue";

    //divleft image styling
    let divLeftImage = document.createElement("div");
    divLeft.appendChild(divLeftImage);
    divLeftImage.style.height="390px";
    divLeftImage.style.width="400px";
    divLeftImage.style.backgroundColor="grey";
    divLeftImage.style.marginTop="20px";
    divLeftImage.style.backgroundImage="url('women-pant.png')";
    divLeftImage.style.backgroundSize="cover";
    divLeftImage.style.position="fixed";
    divLeftImage.style.marginLeft="150px";
    divLeftImage.style.borderRadius="20px";

    //divright styling
    let divRight = document.createElement("div");
    mainDiv.appendChild(divRight);
    divRight.style.height="550px";
    divRight.style.width="50%";
    // divRight.style.backgroundColor="green";

    let divRightText = document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="390px";
    divRightText.style.width="450px";
    // divRightText.style.backgroundColor="grey";
    divRightText.style.marginTop="20px";
    divRightText.style.position="fixed";

    let h1 = document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText = "Shoply Offer : Trending Shop Now";
    h1.style.fontSize="35px";
    h1.style.paddingTop="10px";

    let h3 = document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText = "Special Price";
    h3.style.fontWeight ="400px";
    h3.style.paddingTop="10px";
    h3.style.fontSize= "25px";

    let h2 = document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText = "$20";
    h2.style.fontWeight ="400px";
    h2.style.paddingTop="10px";
    h2.style.fontSize= "25px";

    let p = document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex ullam odio rerum accusamus? Nobis unde aperiam ab soluta qui ea aspernatur, corrupti maiores, consectetur, molestias recusandae ex ipsum. Dolorum.";
    p.style.fontWeight ="300px";
    p.style.paddingTop="10px";

    let button = document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="50px";
    button.style.width="150px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.marginTop="20px";
    button.style.borderRadius="20px";
    button.style.color="white";
    button.style.fontSize="20px";

    let button2 = document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add To Cart";
    button2.style.height="50px";
    button2.style.width="150px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.marginTop="20px";
    button2.style.marginLeft="20px";
    button2.style.borderRadius="20px";
    button2.style.color="white";
    button2.style.fontSize="20px";

    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopsGirl.style.display="block";
        shopsBox1.style.display="block";
    })
});
