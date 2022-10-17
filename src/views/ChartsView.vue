<template>
<v-container>
    <span style="font-size: 15px">YOU ARE HERE > CHARTS</span>
    <br />
    <span style="font-size: 25px">Visual - </span><span style="font-size: 25px; font-weight: 600">Charts</span>
    <br />
    <br />
    <v-row>
        <v-col cols="8">
            <v-card hover loading loader-height="2">
                <v-card-text>
                    <p style="font-weight: 600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ex laboriosam. Obcaecati tempore, velit quibusdam blanditiis laborum officiis exercitationem sed.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </v-card-text>
                <column-chart :data="data"></column-chart>
            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card hover loading loader-height="2">
                <line-chart :library="{backgroundColor: '#eee'}" :data="data"></line-chart>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="3">
            <v-card hover loading loader-height="2">
                <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Strawberry', 23],['Strawberry', 23], ['Strawberry', 23]]"></pie-chart>
            </v-card>
        </v-col>
        <v-col cols="9">
            <v-card hover loading loader-height="2">
                

            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'ChartsView',
    data() {
        return {
            
            data: [{
                    name: 'Workout',
                    data: {
                        '2021-01-01': 8,
                        '2021-01-02': 9
                    }
                },
                {
                    name: 'Fake Data',
                    data: {
                        '2021-01-01': 5,
                        '2021-01-02': 2
                    }
                },
                {
                    name: 'Dummy',
                    data: {
                        '2021-01-01': 3,
                        '2021-01-02': 4
                    }
                },
                {
                    name: 'Faker',
                    data: {
                        '2021-01-01': 1,
                        '2021-01-02': 3
                    }
                },
                {
                    name: 'Workout',
                    data: {
                        '2021-01-01': 10,
                        '2021-01-02': 4
                    }
                },
                {
                    name: 'Faker',
                    data: {
                        '2021-01-01': 1,
                        '2021-01-02': 3
                    }
                },
                {
                    name: 'Workout',
                    data: {
                        '2021-01-01': 10,
                        '2021-01-02': 4
                    }
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
