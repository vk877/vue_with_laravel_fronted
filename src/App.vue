<template>
<v-app>
  <NavComponent></NavComponent>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
      <!-- If using vue-router -->
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import NavComponent from './components/NavComponent.vue';
export default {
    name: 'App',
    components:{
      NavComponent
    },
    data: () => ({
        //
    }),
};
</script>
