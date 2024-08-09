


const toggleButton=document.getElementById("nav-toggle");
const navLinks=document.getElementById("nav-links");
// const div=document.getElementById("header")
toggleButton.addEventListener('click',()=>{
    if(navLinks.classList.toggle("active")){
        toggleButton.classList.add("add")
        document.body.classList.add("none");
        
    }else{
        toggleButton.classList.remove("add")
        document.body.classList.remove("none");

    }
    
})


    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Stop observing once it has become visible
            }else{
                entry.target.classList.remove('visible');
            }
        });
    },);

    const elements = document.querySelectorAll('.scroll-element');
    elements.forEach(element => {
        observer.observe(element);
    });


