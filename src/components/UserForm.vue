<template>
  <div>
    <div class="form-group">
      <label>Name</label>
      <input v-model="localUser.firstName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Surname</label>
      <input v-model="localUser.lastName" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input v-model="localUser.email" type="email" class="form-control" />
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input v-model="localUser.phone" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Registered</label>
      <input v-model="localUser.registered" type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label>Active</label>
      <input v-model="localUser.isActive" type="checkbox" class="form-check-" />
    </div>

    <pre>{{ localUser }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    //   user: {
    //       deep: true,
    //       handler() {
    //           this.localUser = Object.assign({}, this.user)
    //       }
    //   },
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('update', Object.assign({}, this.localUser))
    }
  }
}
</script>
