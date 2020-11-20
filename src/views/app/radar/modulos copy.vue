<template>
  <div>
    <video-embed ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>


  </div>
</template>

<script>


    export default {

        methods: {

            change() {

                this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

            }
        }

    }
</script>
