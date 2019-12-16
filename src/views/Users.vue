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
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  }
}
</script>
