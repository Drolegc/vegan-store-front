<template>
    <v-col class=" " cols="4" sm="3">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-card height="100%" v-on="on">
                    <v-img
                        src="https://static.wixstatic.com/media/7216cc_5d553e7e3da841a0958274266cdeb890~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85/7216cc_5d553e7e3da841a0958274266cdeb890~mv2.jpg">
                    </v-img>
                    <v-card-title class="pa-1 subtitle-1">{{nombre}}</v-card-title>
                </v-card>
            </template>
            <v-card>
                <v-card-title>{{nombre}}</v-card-title>
                <v-card-subtitle>Lugares de venta</v-card-subtitle>
                <v-card-text>
                    <v-expansion-panels>
                        <v-expansion-panel v-for="local in locales">
                            <v-expansion-panel-header>{{local.name}}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <google-map :puntos="[{'latitud':local.lat,'longitud':local.lng}]" :map="local.id" :name="local.name"></google-map>
                                <v-spacer></v-spacer>
                                <router-link :to="{ name: 'locales' }">Inventario de {{local.name}}</router-link>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text icon color="blue-grey">
                        <v-icon elevation=1 @click="dialog = false">mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>

</template>

<script>

    import GoogleMap from '@/components/GoogleMaps/GoogleMap.vue';

    export default {
        name: 'producto',
        props: ['img', 'nombre', 'locales'],
        data() {
            return {
                dialog: false
            }
        },
        components: {
            GoogleMap,
        },
    }
</script>