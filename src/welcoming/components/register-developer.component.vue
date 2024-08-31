<script>
/**
 * @name register-developer
 * @description
 * This component is responsible for registering a new developer.
 * It emits an event to the parent component when the form is submitted.
 * @emits developer-registered
 */
export default {
  name: "register-developer",
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    /**
     * @name onSubmit
     * @description
     * This method is called when the form is submitted.
     * It emits an event to the parent component with the developer's first and last name.
     */
    onSubmit() {
      console.log("Registering developer");
      this.$emit( 'developer-registered', { firstName: this.firstName, lastName: this.lastName});
    }
  }
}
</script>

<template>
<div>
  <h2>New Developer</h2>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" v-model="firstName" required/>
      </div>
      <div>
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" v-model="lastName" required/>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</div>
</template>

<style scoped>

</style>