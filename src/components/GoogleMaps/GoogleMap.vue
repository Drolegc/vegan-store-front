<template>
    <div class="googlemap">
        <div :id="map" class="map"></div>
        <v-progress-linear v-show="cargando" indeterminate color="yellow darken-2"></v-progress-linear>
    </div>
</template>

<script>
    export default {
        nombre: 'googlemap',
        props: ['puntos','map','name'],
        data(){

            return {
                cargando: true
            }
        },
        watch: {
            puntos() {
                this.initMap(this);
            }
        },
        methods: {
            async initMap(self) {
                // The location of Uluru
                var lat = self.puntos[0]['latitud'];
                var lng = self.puntos[0]['longitud'];
                
                var uluru = { lat: lat, lng: lng };
                // The map, centered at Uluru
                var idMap = self.map;
                var map = new google.maps.Map(
                    document.getElementById(idMap), {
                        zoom: 16,
                        center: uluru,
                        disableDefaultUI: true,
                    });

                //Agregar marcadores
                for (var punto of self.puntos) {
                    var lat = punto['latitud'];
                    var lng = punto['longitud'];
                    var coords = { lat: lat, lng: lng };
                    var label = {
                        text: self.name
                    };
                    var marker = new google.maps.Marker({ position: coords, map: map, label: label });
                };
                self.cargando = false;

            }
        },
    }
</script>

<style>
    .map {
        height: 200px;
        width: 100%;
    }
</style>