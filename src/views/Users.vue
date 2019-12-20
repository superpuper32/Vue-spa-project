<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Loading ...
    </div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersPage',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  data: () => ({
    users: [],
    url: 'http://localhost:3004/users'
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      const token = '1234567890'

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      axios
        .get(this.url, config)
        .then(response => (this.users = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
