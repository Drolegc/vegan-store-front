<template>
  <div id='App'>
    <router-view />

    <!-- Nav bar -->
    <v-bottom-navigation v-model="bottomNav" :absolute=true>
      
      <v-btn value="recent" to="/list">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites" to="/">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby" to="/about">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',

    components: {
      HelloWorld,
    },

    data() {
      return {
        bottomNav: 'recent',
      }
    },
  };
</script>