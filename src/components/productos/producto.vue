<template>
    <v-col sm="6" cols="12">
        <v-card>
            <v-card-title>{{nombre}}</v-card-title>
            <v-card-text>
                Nam commodo suscipit quam.
                Curabitur vestibulum aliquam leo.
            </v-card-text>
        </v-card>
    </v-col>

</template>

<script>
    export default {
        name: 'producto',
        props: ['img', 'nombre'],
    }
</script>