<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="item in maxPages" :key="item" class="page-item">
        <a class="page-link" href="#">{{ item }}</a>
      </li>

      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PagePagination',
  model: {
    prop: 'page'
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    maxPages() {
      return Math.ceil(this.total / this.perPage)
    }
  }
}
</script>
