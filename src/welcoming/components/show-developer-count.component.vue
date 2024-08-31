<script>
export default {
  name: "show-developer-count",
  props: {
    developerCount: { type: Number, required: true }
  }
}
</script>

<template>
  <div>
    <p>Developers registered: {{ developerCount }}</p>
    <p>Note: Unknown developers are not considered.</p>
  </div>
</template>

<style scoped>

</style>
