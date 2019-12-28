<template>
    <div id="list">
        <!-- Buscador -->
        <v-toolbar class="ms-auto" color="primary">
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field label="Search" v-model="search"></v-text-field>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- Productos -->
        <v-row>
            <producto v-for="item in items" img="some img" nombre="some name"></producto>
        </v-row>

    </div>
</template>

<script>

import Producto from '@/components/productos/producto.vue';
import getItems from '@/utils/getItems.js';

export default {

    name:'list',
    data() {

        return {

            items:[],
            search:''
        }
    },
    components: {

        Producto,
    },
    created() {

        var self = this;
        getItems().then(
            function(data){
                self.items = data['results'];
            }
        )
    },
};
</script>