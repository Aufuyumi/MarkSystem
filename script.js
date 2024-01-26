(document).ready(function(){
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Form submission
    $('#contact-form').submit(function(e){
        e.preventDefault();
        
        // Here you can handle the form submission using AJAX or any other method
        alert('Form submitted!');
    });
});