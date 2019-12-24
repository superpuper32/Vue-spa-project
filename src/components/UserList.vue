<template>
  <div class="card">
    <div class="card-header">
      <nav class="navbar justify-content-between">
        <p class="navbar-brand">Количество пользователей - {{ totalRows }}</p>

        <form class="form-inline">
          <button class="btn btn-primary my-2 my-sm-0" type="button">Обновить</button>
        </form>
      </nav>
    </div>

    <div class="card-body">
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
          <tr v-for="user in filteredRows" :key="user.id">
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
    </div>

    <div class="card-footer">
      <div class="form-group">
        <pages-pagination
          v-model.number="selectedPage"
          :per-page="rowsPerPage"
          :total="totalRows"
        />
        <p>Выбрана страница - {{ selectedPage }}</p>
      </div>
    </div>
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
    selectedPage: 1,
    loading: false
  }),
  computed: {
    totalRows() {
      return this.users.length
    },

    filteredRows() {
      return this.users.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage
        const endIndex = startIndex + this.rowsPerPage

        return startIndex <= index && index < endIndex
      })
    }
  },
  watch: {
    rowsPerPage() {
      this.selectedPage = 1
    }
  }
}
</script>
