function test(){
    const cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        element.classList.add("class","visable")
    }
}




function overtest(thing){

    const x = thing;

    // if(x.classList.contains('card-hover')){

    // }


    x.style.transform = "scale(1.2)";

    console.log(x.id);



    // const cards = document.getElementsByClassName("card")
    // for (let i = 0; i < cards.length; i++) {
    //     const element = cards[i];
    //     element.classList.add("class","visable")
    // }

}

function outtest(thing){
    const x = thing;
    x.style.transform = "scale(1)";
    console.log(x.id);
}