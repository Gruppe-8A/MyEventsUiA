
        //Definerer variabel "EventKart" og setter preferansene som er nødvendig for å skrive ut kartet i diven "mapid"
        //L.map: Referer til "leaflet" sin initiering av kart
        //setView: Setter lengdegrad og breddegrad, samt zoom-nivå (eks: setView([lengdegrad, breddegrad], zoom-nivå))
        var EventMap = L.map('mapid').setView([58.15, 8.0], 13);

        //L.tileLayer setter preferanser for hvilken kartmotor som kan benyttes, og hvilke innstillinger for visningen av dette skal gjelde. Vi har benyttet oss av mapbox sitt API og har generert et "access token" gjennom siden deres ved bruk av en gratis-konto.
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlb2Rvcmx1aWEiLCJhIjoiY2t2N3VkcmVjMjdzeDJ2b3Y5dXlqdmNsdyJ9.XsUMsGHxV7fIKZUxUaALng', {
            maxZoom: 18, //Beskriver hvor nært brukeren kan zoome i kartet
            id: 'mapbox/streets-v11', //Definerer hvilke kartgrunnlag som skal benyttes
            tileSize: 512, //Definerer hvilken størrelse det skal være på de enkelte kartflisene som lastes inn. 
            zoomOffset: -1, //Definerer hvor mange zoom-nivåer som hver kartflis skal avvike fra
            accessToken: 'pk.eyJ1IjoidGhlb2Rvcmx1aWEiLCJhIjoiY2t2N3VkcmVjMjdzeDJ2b3Y5dXlqdmNsdyJ9.XsUMsGHxV7fIKZUxUaALng' //Definerer tilgangskoden som brukes for å kunne benytte kartmotoren mapbox har tilgjengelig. Det er tillatt med 25 000 brukere i måneden med denne tilgangskoden
        }).addTo(EventMap); //Avslutter og tillegger alle verdier til variabelen "EventKart"





        var KinoDivIcon = L.divIcon({
            iconAnchor:   [55, 85],
            html: "<div class='map-div-icon'><span class='map-icon-text'>No Time To Die</span><br><img src='img/kinoikon.png' style='height: 70px; width: 55px;'></div>"});

        var kino= L.marker([58.1429048387354, 7.994636212547794], {icon: KinoDivIcon, title: "Kino"}).addTo(EventMap);
        
        kino.on('click', () => {
            Array.from(document.querySelectorAll('.main-content')).forEach((el) => el.classList.add('hidden'));
            document.querySelector('#EventDiv').classList.remove("hidden");
        });


        var hjemmefestDivIcon = L.divIcon({
            iconAnchor:   [55, 85],
            html: "<div class='map-div-icon'><span class='map-icon-text'>Hjemmefest</span><br><img src='img/hjemmefestikon.png' style='height: 70px; width: 55px;'></div>"});

        var hjemmefest= L.marker([58.147790736111276, 7.995571661280123], {icon: hjemmefestDivIcon, title: "Hjemmefest"}).addTo(EventMap);
        
        hjemmefest.on('click', () => {
            //window.location.href="show_event.html";
        });


        var rumpeldunkDivIcon = L.divIcon({
            iconAnchor:   [55, 85],
            html: "<div class='map-div-icon'><span class='map-icon-text'>VM i Rumpeldunk</span><br><img src='img/rumpeldunkikon.png' style='height: 70px; width: 55px;'></div>"});

        var rumpeldunk= L.marker([58.14772389923354, 8.02178226789893], {icon: rumpeldunkDivIcon, title: "Rumpeldunk"}).addTo(EventMap);
        
        rumpeldunk.on('click', () => {
            //window.location.href="show_event.html";
        });