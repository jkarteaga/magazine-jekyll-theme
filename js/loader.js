/**
 * loader support coutesy of https://ihatetomatoes.net/create-custom-preloading-screen/
 */
// element

$(window).load(function() {
    console.log('loaded')
    $('body').addClass('loaded');
});