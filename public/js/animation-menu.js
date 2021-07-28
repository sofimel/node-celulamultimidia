// scroll para seções
let navBtn = $('.nav-item')

let homeSection = $('#home')
let trabalhosSection = $('#trabalhos')
let conhecaSection = $('#conheca')
let faleSection = $('#faleconosco')

let scrollTo = ''

$(navBtn).click(function(){
    let btnId = $(this).attr('id');
    console.log(btnId)

    switch(btnId){
    case 'home-menu':
        scrollTo = homeSection
        console.log(scrollTo)
        break;
    
    case 'trabalhos-menu':
        scrollTo = trabalhosSection
        console.log(scrollTo)
        break;
    
    case 'conheca-menu':
        scrollTo = conhecaSection
        console.log(scrollTo)
        break;
        
    case 'fale-menu':
        scrollTo = faleSection
        console.log(scrollTo)
        break;

    default:
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    },1500)
    
})

