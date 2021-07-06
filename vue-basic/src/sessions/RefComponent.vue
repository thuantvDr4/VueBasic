<template>
    <div class="container">
        <div class="refComponent">
            <h1>Demo Ref</h1>
            <input ref="inputRef"
                   type="file"
                   style="display: none"
            />
            <button
                    v-on:click="changeAvatar"
                    class="avatar">
                Thay đổi Avatar
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            changeAvatar() {
                this.$refs.inputRef.click();
            }
        },
        computed: {},
    }
</script>

<style scoped>

    .container{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 20px ;
        margin-bottom: 20px;
    }
    .refComponent {
        width: 50%;
        height: 200px;
        border-radius: 4px;

        align-items: center;

        border: solid 2px grey;
        background-color: #eee;
    }

    .avatar {
        padding: 20px;

        color: #ffffff;
        background-color: #696969;
        border: 1px solid #444444;

        cursor: pointer;
    }

    .avatar:hover {
        background-color: white;
        color: black;
    }

</style>
