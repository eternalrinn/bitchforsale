function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () =>{
    scrollToElement('.cons')
})
link2.addEventListener('click', () =>{
    scrollToElement('.Girls')
})
