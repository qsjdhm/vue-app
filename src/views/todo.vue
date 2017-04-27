<template>
    <div class="todo-page">
        todopage222
    </div>
</template>

<script type="text/ecmascript-6">


    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

    export default {
        data: function () {
            return {

            }
        },
        computed: {
            ...mapState({
            })
        },
        created: function () {
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
    }
</script>

<style lang="less" scoped>

</style>
