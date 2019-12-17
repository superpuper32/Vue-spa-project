<template>
  <div>
    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>

    <user-form v-else :user="user" @update="user = $event" />

    <button type="bitton" class="btn btn-primary" @click="save">
      Save
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    UserForm
  },
  data: function() {
    return {
      user: null
    }
  },
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
        .get('http://localhost:3004/users/' + this.id)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch('http://localhost:3004/users/' + this.id, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    }
  }
}
</script>
