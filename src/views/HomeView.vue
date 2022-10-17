<template>
<v-container>
    <v-row>
        <v-col cols="3">
            <v-card hover color="teal darken-2" dark>
                <v-card-text>
                    <h1>Roles</h1>
                    <br>
                    <h1 class="display-2">00</h1>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark to="/allusers">
                        More Info
                        <v-icon right>
                          mdi-arrow-right-bold-circle-outline
                        </v-icon>
                    </v-btn>
                    
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card hover color="lime darken-2" dark>
                <v-card-text>
                    <h1>All Users</h1>
                    <br>
                    <h1 class="display-2">00</h1>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                        More Info
                        <v-icon right>
                          mdi-arrow-right-bold-circle-outline
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card hover color="green darken-2" dark>
                <v-card-text>
                    <h1>Paid Trainee</h1>
                    <br>
                    <h1 class="display-2">00</h1>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                        More Info
                        <v-icon right>
                          mdi-arrow-right-bold-circle-outline
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card hover color="purple darken-2" dark>
                <v-card-text>
                    <h1>Dummy</h1>
                    <br>
                    <h1 class="display-2">00</h1>
                </v-card-text>
                <v-card-actions>
                    <v-btn text dark>
                        More Info
                        <v-icon right>
                          mdi-arrow-right-bold-circle-outline
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <div>
        <router-view></router-view>
    </div>
</v-container>
</template>

<script>

export default {
    name: 'HomeView',

    data() {
        return {

        }
    }
}
</script>
