<template>
    <div class="main-page">
        <h1>hey {{currentUser.email}}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'currentUser'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>
