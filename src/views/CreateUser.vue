<template>
  <div>
    <h2>Создание пользователя</h2>

    <div class="card">
      <div class="card-header"></div>
      <div class="card-body bg-light">
        <user-form v-model="user">
          <div slot="buttons">
            <button type="button" class="btn btn-primary" @click="create">
              Создать
            </button>
          </div>
        </user-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const defaultUser = {
  id: null,
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'CreateUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => {
    return {
      user: defaultUser,
      url: 'http://localhost:3004/users/'
    }
  },
  methods: {
    create() {
      axios.post(this.url, this.user).then(() => {
        this.$router.push({ path: '/users' })
      })
    }
  }
}
</script>
