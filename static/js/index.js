/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
//Function to open menu
function openNav(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.borderWidth = "1px";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("menu_text").style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    $('#mySidenav a').fadeIn('slow')
    window.removeEventListener("scroll", scrollFunction, false)
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
//Function to close menu
function closeNav(e) {
    e.preventDefault()
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.borderWidth = "0";
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("menu_text").style.display = "block";
    document.body.style.backgroundColor = "white";
    $('#mySidenav a').fadeOut('fast')
    window.addEventListener('scroll', scrollFunction, false)
    if (document.documentElement.scrollTop >= 190) {
        scrollTop.style.display = "block";
    }

}

//Variable for menu hamburger icon
var menuBtn = document.getElementsByClassName('nav_link_6')[0]

//Event listener for sidemenu hamburger icon
menuBtn.addEventListener('click', function(e){
    return openNav(e)
}, false)

//Variable for close button in sidemenu
var xBtn = document.getElementById('closebtn')

//Event listener for close button
xBtn.addEventListener('click', function(e){
    return closeNav(e)
}, false)

//Function for Donate button link 
function donateLoc(){
    return location.href = 'https://integrationcharterschools.org/donate/'
}

//Function for Read More button link
function presMsg(){
    return location.href = 'https://integrationcharterschools.org/our-schools/about-ics/presidents-message/'
}

//Variable for Read More button
var presBtn = document.getElementById('presBtn')

//Event listener for Read More button
presBtn.addEventListener('click', presMsg, false)

//Variable for Donate Button
var donateBtn = document.getElementById('donate')

//Event Listener for Donate Button 
donateBtn.addEventListener('click', donateLoc, false)

//Animation to fade in & out menu text as user hovers
//mouse over hamburger icon
$('.nav_link_6').on('mouseover', function(){
    $('.menu_text').stop(false, true).animate({
        left:'86vw',
        opacity:'+=10'
    }, 200, 'linear')
}).on('mouseout', function(){
    $('.menu_text').animate({
        left: '88vw',
        opacity: '-=10'
    }, 200, 'linear').stop(false, true)
})

//Hover animation for second dropdown menu in sidebar
function checkWindowSize() {
    var windowWidth = $(window).width();

    // clean up all handlers first
    $("#dropdown-btn1, #dropdown-btn2").off('mouseenter mouseleave click');
    $('#dropdown1, #dropdown2').off('mouseenter mouseleave');

    if (windowWidth < 992) {
        // for smaller screens, use click event
        $("#dropdown-btn1, #dropdown-btn2").on('click', function () {
            var dropdown = $(this).next(); // assumes the dropdown is the next sibling of the button
            dropdown.stop(true, false).slideToggle('medium');
        });
    } else {
        // for larger screens, use hover event
        $("#dropdown-btn1, #dropdown-btn2").hover(
            function () {
                var dropdown = $(this).next(); // assumes the dropdown is the next sibling of the button
                dropdown.stop(true, false).slideDown('medium');
            },
            function () {
                var dropdown = $(this).next(); // assumes the dropdown is the next sibling of the button
                dropdown.delay(200).slideUp('medium');
            }
        );

        $('#dropdown1, #dropdown2').hover(
            function () {
                $(this).stop(true, false).slideDown('medium');
            },
            function () {
                $(this).stop(true, false).slideUp('medium');
            }
        );
    }
}

// Call checkWindowSize() when window is resized.
$(window).resize(checkWindowSize);

// Call checkWindowSize() on page load.
$(document).ready(checkWindowSize);

//Event listener for green scroll down button
$('.scroll').on('click', (e) =>{
    e.preventDefault()
    window.scrollTo(0, 1010)
})

window.addEventListener('scroll', scrollFunction, false)



function scrollFunction() {
    var scrollTop = document.getElementById('scrollTop')
    var viewableScreen = $(window).width()
    if (document.documentElement.scrollTop >= 190) {
        if (viewableScreen >= 992 ){
            scrollTop.style.display = "block";
        }
    } else {
        scrollTop.style.display = "none";
    }
    scrollTop.addEventListener('click', function(e){
        e.preventDefault()
        document.documentElement.scrollTop = 0
    })
}



//variable for adding a Script tag
var script = document.createElement('script')
//The source value for the newly created Script tag
//This is to add in the Google Maps API
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBo15irWUiS1X6-7pF_gnc1dOzbmf7BTYs&callback=init'
//Setting to make loading the script to be asynchronous
//so the page doesn't wait for the script to load
script.async = true
//Using Jquery to add the new Script tag to the
//near the end of the closing body tag
$('body').append(script)

//This adds a function to the Window Object
//to load in the settings for the Google Maps API
window.init = () => {
    //This centers the map to view the three school locations
    var mapOptions = {
        center: new google.maps.LatLng(40.6008351487773, -74.17396798383172),
        mapTypeId: 'satellite',
        zoom: 14,
        tilt: 45,
        rotateControl: true
    }
    //Variable for the div with an id attribute of 'map'
    var schoolMap = new google.maps.Map(document.getElementById('map'), mapOptions)
    //Custom Icon for CC1 building
    var schoolIcon = {
        url: "static/img/school-icon.svg", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
    }
    //Custom Icon for CC3 building
    var buildingIcon = {
        url: "static/img/building-icon.svg", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
    }
    //Custom Icon for Richmond Building
    var building2_Icon = {
        url: "static/img/building2-icon.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
    }
    //String for marker info box
    const cc3Info = `<h5>Nicotra Early College Charter School - 5th Floor<br>Richmond Prep Charter School - 5th Floor<br>New Ventures Charter School - 4th floor<br>Lavelle Prep Elementary - 3rd Floor</h5>`
    //Marker settings for CC3 building marker
    var cc3 = new google.maps.Marker({
        position: { lat: 40.604638, lng: -74.180596},
        animation: google.maps.Animation.DROP,
        title: cc3Info,
        map: schoolMap,
        icon: buildingIcon
    })
    //Marker settings for Richmond Prep Building marker
    var rpc = new google.maps.Marker({
        position: { lat: 40.592320114707704, lng: -74.16259445414985},
        animation: google.maps.Animation.DROP,
        title: '<h5>Richmond Prep Charter School</h5>',
        map: schoolMap,
        icon: building2_Icon
    })
    //Marker settings for CC1 building marker
    var cc1 = new google.maps.Marker({
        position: { lat: 40.60483139579638, lng: -74.17900760858936},
        animation: google.maps.Animation.DROP,
        title: '<h5>Lavelle Prep Middle & High School</h5>',
        map: schoolMap,
        icon: schoolIcon
    })
    //Stores Info box function for later use in event listeners for 
    //each marker
    const infoWindow = new google.maps.InfoWindow();
    //Event Listener for CC1 marker
    cc1.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(cc1.getTitle());
        infoWindow.open(cc1.getMap(), cc1);
    });
    //Event Listener for CC3 marker
    cc3.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(cc3.getTitle());
        infoWindow.open(cc3.getMap(), cc3);
    });
    //Event Listner for Richmond Prep marker
    rpc.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(rpc.getTitle());
        infoWindow.open(rpc.getMap(), rpc);
    });
    //Sets marker animation to bounce when user hovers
    //mouse on Richmond prep address link
    $('#link1').hover(function(){
        rpc.setAnimation(google.maps.Animation.BOUNCE)
    }, function(){
        rpc.setAnimation(null)
    })
    //Sets marker animation to bounce when user hovers
    //mouse on CC3 address link
    $('#link2').hover(function(){
        cc3.setAnimation(google.maps.Animation.BOUNCE)
    }, function(){
        cc3.setAnimation(null)
    })
    //Sets marker animation to bounce when user hovers
    //mouse on CC1 address link
    $('#link3').hover(function(){
        cc1.setAnimation(google.maps.Animation.BOUNCE)
    }, function(){
        cc1.setAnimation(null)
    })
}

//Fade in & out animation for address link pop-up boxes
$(window).resize(function () {
    $('.schoolLocation').off('mouseover mouseout'); // remove previously added handlers when resizing
    if ($(window).width() >= 992) {
        $('.schoolLocation').on('mouseover', 'li a', function (e) {
            let link = e.target;
            let description = $(link).siblings(".locDescription");
            description.stop(false, true).fadeIn('fast');
        }).on('mouseout', 'li a', function (e) {
            let link = e.target;
            let description = $(link).siblings(".locDescription");
            description.stop(false, true).fadeOut('fast');
        });
    }
}).resize(); // trigger the event to ensure handlers are set correctly on page load
