<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      <i class="fa fa-refresh fa-spin" />
      Loading...
    </div>

    <user-form v-else v-model="user">
      <button type="button" class="btn btn-primary" @click="save">
        Save
      </button>
    </user-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null,
    url: 'http://localhost:3004/users/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url + this.id)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch(this.url + this.id, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
