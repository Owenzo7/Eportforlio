// 




// xjhoIWRGWwVnvUg96 - Public Key


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

let isModalOpen = false;
function toggleModal () {

    

    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    
    }
        
        

    isModalOpen = true;
   document.body.classList += " modal--open"
}



