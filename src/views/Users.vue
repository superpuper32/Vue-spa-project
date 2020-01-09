<template>
  <div>
    <h2>Список пользователей</h2>

    <!-- <div v-if="!props.length" class="alert alert-warning">
      Loading ...
    </div> -->
    <user-list :url="url">
      <template v-slot:table-header>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </template>
      <template v-slot:table-row="props">
        <td>
          <router-link :to="`/edit/${props.id}`">{{ props.id }}</router-link>
        </td>
        <td>{{ props.firstName }}</td>
        <td>{{ props.lastName }}</td>
        <td>{{ props.isActive }}</td>
        <td>{{ props.balance }}</td>
        <td>{{ props.email }}</td>
        <td>{{ props.phone }}</td>
        <td>{{ props.registered }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  data: () => ({
    url: 'http://localhost:3004/users'
  })
}
</script>
