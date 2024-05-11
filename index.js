let plusSignLength =document.querySelectorAll(".plus").length;
console.log(plusSignLength);
//let link = document.querySelectorAll(".plus")[0].src;
//console.log(link);
//const sign = document.getElementsByClassName("plus")[0];
//sign.addEventListener("click", changeImg);

for(i=0; i<plusSignLength; i++){
    let clicked= document.querySelectorAll(".plus")[i];
    
    let answer = document.querySelectorAll(".hide")[i];
    clicked.addEventListener("click",function(){
        answer.classList.toggle("hide");
        console.log(clicked.src);
        if(clicked.src.includes("icon-plus.svg")){
        clicked.src = "./icon-minus.svg";
        console.log(clicked.src);
        } else {
            clicked.src="./icon-plus.svg";

        }
    })
}



