let isModalOpen = false;
let contrastToggle = false;

 function toggleContrast () {
    contrastToggle = !contrastToggle;

    if(contrastToggle) {

        document.body.classList += " dark-theme"

    }

    else{

        document.body.classList.remove("dark-theme")
    }

   
 }


function contact (event) {

    event.preventDefault()

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_o3zsd3m',
        'template_pau2pyr',
        event.target,
        'xjhoIWRGWwVnvUg96'
    ).then(()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked');
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The Email Servers are temporarily unavailable. Please contact me directly on owenrogers545@gmail.com"
        
            )

    })    
}


function toggleModal () {

    

    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    
    }
        
        

    isModalOpen = true;
   document.body.classList += " modal--open"
}



