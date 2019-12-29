<template>
  <div>
    <input :value="value" type="text" class="form-control" />

    <input ref="file" type="file" class="hidden" @change="upload" />
    <button type="button" class="btn btn-primary" @click="selectFile">
      Выбрать...
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AvatarUploader',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    setNewAvatar(url) {
      this.$emit('input', url)
    },
    selectFile() {
      this.$refs.file.click()
    },
    upload() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.file.files[0])
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        })
    }
  }
}
</script>

<style>
.hidden {
  display: none;
}
</style>
