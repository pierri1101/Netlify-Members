<template>
  <div class="icon-row-item">
    <b-card class="mb-4 text-center">
      <i :class="icon"/>
      <p class="card-text font-weight-semibold mb-0">{{ title }}</p>

    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    icon: { type: String, default: 'iconsminds-clock' },
    title: { type: String, default: 'icon-card-title' }
  }
}
</script>
