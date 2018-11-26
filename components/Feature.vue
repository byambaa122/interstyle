<template>
    <v-card
        class="mb-4"
        flat
    >
        <!-- Icon -->
        <div class="text-xs-center">
            <v-avatar
                color="grey lighten-4"
                size="100"
            >
                <v-icon
                    v-text="icon"
                    size="50"
                ></v-icon>
            </v-avatar>
        </div>
        <!-- Body -->
        <v-card-text>
            <div class="subheading text-xs-center">
                <!-- Title -->
                <div class="font-weight-bold text-uppercase my-2">
                    {{ title }}
                </div>
                <!-- Text -->
                <div class="grey--text text--darken-1 font-weight-light">
                    {{ body }}
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
