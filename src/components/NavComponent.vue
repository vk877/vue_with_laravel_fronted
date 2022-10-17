<template>
<div>
    <v-app-bar app dense flat dark fixed>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Panel</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn :to="'/'">
            <v-list-item-title>Home</v-list-item-title>
        </v-btn>

        <v-btn :to="'/notifications'">
            <v-list-item-title>Notifications</v-list-item-title>
        </v-btn>

        <v-btn :to="'/map'">
            <v-list-item-title>Map</v-list-item-title>
        </v-btn>

        <v-btn :to="'/charts'">
            <v-list-item-title>Charts</v-list-item-title>
        </v-btn>
        
        <v-col cols="3">
            <v-text-field hide-details append-icon="mdi-magnify" single-line dense outlined label="Search Dashboard"></v-text-field>
        </v-col>
        <v-btn small rounded>
            <v-icon size="24px">
                mdi-chat
            </v-icon>
        </v-btn>
        <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon x-large v-on="on">
                    <v-avatar color="brown" size="48">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg">
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                        <v-avatar color="brown">
                            <img src="https://randomuser.me/api/portraits/men/81.jpg">
                        </v-avatar>
                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-btn depressed rounded text>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn depressed rounded text>
                            <v-icon>mdi-power</v-icon>
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>
        &nbsp;
        &nbsp;
    </v-app-bar>
    <!-- navigation drawer start -->
    <v-navigation-drawer v-model="drawer" absolute temporary dark hide-overlay>
        <v-list-item two-line>
            <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
                <v-list-item-subtitle>admin@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item-group>
                <v-list-item :to="'/'">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item :to="'/notifications'">
                    <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Notifications</v-list-item-title>
                </v-list-item>

                <v-list-item :to="'/map'">
                    <v-list-item-icon>
                        <v-icon>mdi-map</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Map</v-list-item-title>
                </v-list-item>

                <v-list-item :to="'/charts'">
                    <v-list-item-icon>
                        <v-icon>mdi-chart-bar-stacked</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Charts</v-list-item-title>
                </v-list-item>
                
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
    <!-- navigation drawer end -->
</div>
</template>

<script>
export default {
    name: 'NavComponent',

    data() {
        return {
            drawer: false,
            user: {
                initials: 'AD',
                fullName: 'Admin',
                email: 'admin@gmail.com',
            },

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.my-input.v-input .v-input__slot {
    border-radius: 100px;
}
</style>
