<template>
    <nav>
        <v-toolbar color="blue">
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">
                    CHAT LIST
                </span>
            </v-toolbar-title>
            <v-btn flat color="grey">
                <v-icon right style="color: white;">mdi-exit-to-app</v-icon>
            </v-btn>
            <v-btn flat color="grey" @click="show">
                <v-icon right style="color: white;">mdi-plus</v-icon>
                <ShowModal></ShowModal>
            </v-btn>
        </v-toolbar>
    </nav>
</template> 

<script>

import ShowModal from '@/components/ShowModal.vue'

export default {
    name: "MyNavBar",
    components: { ShowModal },
    methods: {
        show () {
            return true
        }
    }
}

</script>