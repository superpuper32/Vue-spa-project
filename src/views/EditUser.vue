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
        .then(() => this.$router.push({ path: '/users' }))
        .catch(error => console.error(error))
    }
  }
}
</script>
