<template>
    <div class="LocalesDetails">
        <google-map-absolute :locales="locales"></google-map-absolute>
    </div>
</template>

<script>
import GoogleMapAbsolute from '@/components/GoogleMaps/GoogleMapAbsolute.vue';
import getLocales from '@/utils/getLocales.js';

export default {
    name:'LocalesDetails',
    components: {
        GoogleMapAbsolute
    },
    data() {
        return {
            locales: [],
        }
    },
    created(){
        var self = this;
            getLocales().then(
                function (data) {
                    self.locales = data['results'];
                }
            )
    }
}
</script>

<style>

.LocalesDetails {

    height: 100vh;

}
</style>