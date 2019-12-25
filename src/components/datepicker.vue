<template>
  <div>
    <input id="datepicker" ref="datepicker" type="text" class="form-control" :value="value" />
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initDatepicker()
  },
  beforeDestroy() {
    if (this.fp) {
      this.fp.destroy()
    }
  },
  methods: {
    update(newDate) {
      this.$emit('input', newDate)
    },
    initDatepicker() {
      this.fp = flatpickr(this.$refs.datepicker, {
        dateFormat: 'd.m.Y',
        onChange: (_, dateStr) => this.update(dateStr)
      })
    },
    updateDatepicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>
