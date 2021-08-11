
const map= L.map('map').setView([50.37, 10.5],7);
const tileUrl= 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const attributions = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

const tiles= L.tileLayer(tileUrl, {attributions});

tiles.addTo(map);

// function to display data markers on the map
for (const stadium of stadiumList) {
    const lat= stadium["lat"];
    const long= stadium["lon"];
    
    const stadiumLoc = L.marker([lat, long]);
    stadiumLoc.addTo(map);

}
//function to display list on map
function displayList() {
    const ul=document.querySelector('.list-in');
    for (const stadium of stadiumList) {
        const li= document.createElement('li');
        const div= document.createElement('div');
        const p= document.createElement('p');
        const a= document.createElement('a');
        a.addEventListener('click', ()=> {
            flyToMap(stadium);
        });

        a.innerText= stadium["Stadium Name"];
        a.href="#"
        p.innerText= "Team: " + stadium["Team"] + "\n Stadium Name: " + stadium["Stadium Name"] +"\n Capacity:  " + stadium["Capacity"]  ; 
        div.classList.add('stadium-div')
        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    }
}
function flyToMap(stadium){

    const lat= stadium["lat"];
    const long= stadium["lon"];

    console.log(lat);

   map.flyTo([lat, long], 13, {
        animate: true,
        duration: 3,

    })

}

displayList ();




