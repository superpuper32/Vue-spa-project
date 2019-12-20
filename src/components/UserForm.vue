<template>
  <div class="container bg-light">
    <div class="row">
      <div class="col-md-8">
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label>Имя</label>
              <input v-model="localUser.firstName" type="text" class="form-control" />
            </div>

            <div class="col-md-6 mb-3">
              <label>Фамилия</label>
              <input v-model="localUser.lastName" type="text" class="form-control" />
            </div>
          </div>

          <div class="mb-3">
            <label>Email</label>
            <input v-model="localUser.email" type="email" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Аватар</label>
            <input v-model="localUser.picture" type="email" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Возраст</label>
            <input v-model="localUser.age" type="number" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Телефон</label>
            <input v-model="localUser.phone" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Зарегистрирован</label>
            <input v-model="localUser.registered" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Активный</label>

            <div class="checkbox-inline">
              <input v-model="localUser.isActive" type="checkbox" /> Да
            </div>
          </div>

          <div class="mb-3">
            <label>Уровень доступа</label>
            <select v-model="localUser.accessLevel" class="form-control">
              <option v-for="item in accessList" :key="item">{{ item }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label>Баланс</label>
            <input v-model="localUser.balance" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Адрес</label>
            <input v-model="localUser.address" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Компания</label>
            <input v-model="localUser.company" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Биография</label>
            <input v-model="localUser.about" type="text" class="form-control" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'ultrasave'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessList: ['guest', 'user', 'admin']
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('ultrasave', Object.assign({}, this.localUser))
    }
  }
}
</script>
