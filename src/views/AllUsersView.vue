<template>
<v-container>
    <h1>All Users</h1>
    <add-user></add-user>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Role
                    </th>
                    <th id="action_text">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.role }}</td>
                    <td>
                        <v-btn text circle>
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>    
                        
                        <v-btn text circle>
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>    
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</v-container>
</template>

<script>
import AddUserViewVue from './AddUserView.vue';
export default {
    name: 'AllUsersView',
    components:{
      "add-user": AddUserViewVue
    },
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Ice cream sandwich',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Eclair',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Cupcake',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Gingerbread',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Jelly bean',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Lollipop',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Honeycomb',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Donut',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'KitKat',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Cupcake',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Gingerbread',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Jelly bean',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Lollipop',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Honeycomb',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'Donut',
            email: 'abc@gmail.com',
            role: 'user'
          },
          {
            name: 'KitKat',
            email: 'abc@gmail.com',
            role: 'user'
          },
        ],
      }
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
 #action_text{
    padding-left: 55px;
 }
</style>
