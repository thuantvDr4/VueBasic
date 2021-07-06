<template>
    <div class="progressBar">
        <p>Progress: {{percent}}%</p>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
export default ({
    setup() {
        const store = useStore();
        //
        const percent = computed(()=>store.getters.completedPercent);
        return{
            percent,
        }
        
    },
})
</script>

<style scoped>
    .progressBar{
       
    }
</style>
