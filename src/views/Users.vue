<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Loading ...
    </div>
    <user-list v-else :users="users">
      <template v-slot:table-header>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
        </tr>
      </template>
      <template v-slot:table-row="{ user }">
        <td>
          <router-link :to="'/edit/' + user.id">{{ user.id }}</router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.isActive }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </template>
    </user-list>
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
