<template>
  <div>
    <h2>Создание пользователя</h2>

    <user-form v-model="user" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    createUser() {
      axios
        .post('http://localhost:3004/users/' + this.id, this.user)
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>
