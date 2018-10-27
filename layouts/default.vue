<template>
    <v-app>
        <!-- Toolbar -->
        <Toolbar />
        <!-- Page component -->
        <v-content>
            <nuxt />
        </v-content>
        <!-- Footer -->
        <Footer />
    </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Footer from '~/components/Footer'

export default {
    components: {
        Toolbar,
        Footer
    }
}
</script>
