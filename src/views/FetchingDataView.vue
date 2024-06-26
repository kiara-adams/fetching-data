<template lang="">
    <div>
        <!-- {{$store.state.aboutMe}} -->
         projects
         < v-for="projects in $store.state.projects":key "projects".nmae >
        <h1>{{projects}}</h1>
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        getProjects(){,
       return this.$store.state.projects
    },
}

    computed:{
        getAboutMe(){
           return this.$store.dispatch('getAboutMe')
        }
    },
    mounted(){
        this.getAboutMe
}
}
</script>
<style lang="">
</style>