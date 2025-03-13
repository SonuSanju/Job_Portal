document.addEventListener('DOMContentLoaded', function() {  
    const companiesLink = document.querySelector('.nav-link:nth-child(2)');  

    companiesLink.addEventListener('click', function(event) {  
        event.preventDefault(); // Prevent the default link behavior  

        window.open('https://in.prosple.com/top-employers', '_blank'); // Open the link in a new tab  
    });  
});  