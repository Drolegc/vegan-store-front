<template>
    <div class="GoogleMapAbsolute">
        <div id="map">

        </div>
    </div>
</template>

<script>

    export default {
        name: 'GoogleMapAbsolute',
        props: ['locales'],
        watch: {
            locales() {
                this.initMap(this);
            }
        },
        data() {

            return {
                lat: -34.9635534,
                lng: -54.950959,
            }
        },
        methods: {
            async initMap(self) {
                // The location of Uluru
                var lat = self.lat;
                var lng = self.lng;

                var uluru = { lat: lat, lng: lng };
                // The map, centered at Uluru
                var idMap = self.map;
                var map = new google.maps.Map(
                    document.getElementById('map'), {
                        zoom: 15,
                        center: uluru,
                        disableDefaultUI: true,
                    });

                //Agregar marcadores
                for (var local of self.locales) {
                    var lat = local['lat'];
                    var lng = local['lng'];
                    var coords = { lat: lat, lng: lng };
                    var label = {
                        text: local['name']
                    };
                    var marker = new google.maps.Marker({
                        position: coords,
                        map: map, 
                        label: label,
                     });

                     google.maps.event.addListener(marker, 'click', function() {
                         console.log(local['id'])
                        self.$router.push({ name:'local', params:{'id':local['id']}});
                     });
                    
                };

            }
        },
    }
</script>



<style>
    .GoogleMapAbsolute {
        height: 100%;
        background-color: rgb(171, 219, 175);
    }

    #map{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>