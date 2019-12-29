<template>
    <div class="googlemap">
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        nombre: 'googlemap',
        props: ['puntos'],
        watch: {
            puntos() {
                console.log("Init Map Function");
                console.log(typeof(this.puntos[0].latitud));
                this.initMap(this);
            }
        },
        methods: {
            initMap(self) {
                // The location of Uluru
                var uluru = { lat: -34.960554, lng: -54.942406 };
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById('map'), {
                        zoom: 14,
                        center: uluru,
                        disableDefaultUI: true,
                    });

                    /*
                //Agregar marcadores
                for (var punto of self.puntos) {
                    var lat = punto['latitud'];
                    var long = punto['longitud'];
                    var coords = { lat: lat, lng: long };
                    var marker = new google.maps.Marker({ position: coords, map: map });
                };
                //self.$emit('mapaListo');
                */
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style>

    #map {
        height: 200px;
        width: 100%;
    }
</style>