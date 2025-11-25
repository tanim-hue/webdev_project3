function initMap() {
  
    const options = {
        zoom: 14,                
        center: { lat: 41.831, lng: -87.627 } 
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
        position: { lat: 41.831, lng: -87.627 },
        map: map
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("questionBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            alert("If you have questions, contact me at:\nmtanim@hawk.iit.edu");
        });
    }
});
