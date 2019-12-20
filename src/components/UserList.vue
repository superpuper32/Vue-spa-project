<template>
  <div>
    <nav class="navbar justify-content-between">
      <p class="navbar-brand">Количество пользователей - {{ total }}</p>

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

    <table class="table table-hover">
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

    <router-link to="/create">Create</router-link>

    <p>Выбрана страница -</p>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import RowsSelector from './dashboard/RowsSelector.vue'

export default {
  name: 'UsersList',
  components: {
    RowsSelector
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    list: [],
    rowsPerPage: 5
  }),
  computed: {
    total() {
      return this.users.length
    }
  }
}
</script>
