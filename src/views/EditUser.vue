<template>
  <div>
    <h2>Редактирование пользователя</h2>
    <div v-if="!user" class="alert alert-warning">
      <i class="fa fa-refresh fa-spin" />
      Loading...
    </div>

    <div v-else class="card">
      <div class="card-header">{{ user.id }} - {{ title }}</div>

      <div class="card-body bg-light">
        <user-form v-model="user">
          <div slot="buttons">
            <button type="button" class="btn btn-primary" @click="save">
              Сохранить
            </button>
          </div>
        </user-form>
      </div>
    </div>
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
    restUrl: 'http://localhost:3004/users/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}`
    },
    title() {
      return !this.user.firstName || !this.user.lastName
        ? 'Пользователь'
        : [this.user.firstName, this.user.lastName, this.user.phone].join(' ')
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch(this.url, this.user)
        .then(() => this.$router.push({ path: '/users' }))
        .catch(error => console.error(error))
    }
  }
}
</script>
