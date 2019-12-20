<template>
  <div>
    <h2>Создание пользователя</h2>

    <user-form v-model="user" />

    <button type="button" class="btn btn-primary" @click="create">
      Создать
    </button>
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
  data: function() {
    return {
      user: defaultUser,
      url: 'http://localhost:3004/users/'
    }
  },
  methods: {
    create() {
      axios.post(this.url, this.user).then(() => {
        this.$router.push({ path: 'users' })
      })
    }
  }
}
</script>
