<template>
<v-container>
    <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
               Add User
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                       <v-col cols="12">
                            <v-text-field label="Name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-select :items="['user', 'trainee', 'employee']" label="Role*" required></v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>

<style lang="scss" scoped>

</style>
