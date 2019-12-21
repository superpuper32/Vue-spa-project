<template>
  <div>
    <nav class="navbar justify-content-between">
      <p class="navbar-brand">Количество пользователей - {{ totalRows }}</p>

      <form class="form-inline">
        <button class="btn btn-primary my-2 my-sm-0" type="button">Обновить</button>
      </form>
    </nav>

    <div class="row">
      <div class="col-md-4 mb-3">
        <rows-selector v-model.number="rowsPerPage" />
        <label for="country">Выбрано элементов на страницу - {{ rowsPerPage }}</label>
      </div>
    </div>

    <table class="table table-hover table-striped">
      <thead>
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
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
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
        </tr>
      </tbody>
    </table>

    <p>Выбрана страница -</p>

    <pages-pagination v-model.number="selectedPage" :per-page="rowsPerPage" :total="totalRows" />
  </div>
</template>

<script>
import RowsSelector from './dashboard/RowsSelector.vue'
import PagesPagination from './dashboard/PagesPagination.vue'

export default {
  name: 'UsersList',
  components: {
    RowsSelector,
    PagesPagination
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    list: [],
    rowsPerPage: 5,
    selectedPage: 1
  }),
  computed: {
    totalRows() {
      return this.users.length
    }
  }
}
</script>
