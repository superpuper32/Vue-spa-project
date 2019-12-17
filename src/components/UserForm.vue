<template>
  <div>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" :value="user.firstName" />
    </div>

    <div class="form-group">
      <label>Surname</label>
      <input type="text" class="form-control" :value="user.lastName" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" :value="user.email" />
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input type="text" class="form-control" :value="user.phone" />
    </div>

    <div class="form-group">
      <label>Registered</label>
      <input type="text" class="form-control" :value="user.registered" />
    </div>

    <div class="form-group">
      <label>Active</label>
      <input type="checkbox" class="form-check-" :value="user.isActive" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
