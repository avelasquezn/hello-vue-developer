<script>
export default {
  name: "register-developer",
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    onSubmit() {
      console.log("Registering developer");
      this.$emit( 'developer-registered', { firstName: this.firstName, lastName: this.lastName});
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>