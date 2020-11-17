<template>
<div class="d-flex flex-row mb-4 pb-4 border-bottom">
    <router-link tag="a" :to="detailPath">
        <img :src="data.thumb" :alt="data.title" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xmedium" />
    </router-link>
    <div class="pl-4 pr-4">
        <router-link tag="a" :to="detailPath">
            <p class="font-weight-bold mb-4" style="font-size:24px;">{{ data.title }}</p>
            <p class="font-weight-medium mb-2" style="font-size:18px;">{{ data.description }}</p>
            <br>
            <p class="text-muted mb-0 text-medium">{{ data.date }}</p>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['data', 'detailPath']
}
</script>
