<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: pages.current_page == 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="emitPage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <!--
      <li class="page-item" v-for="(item, index) in pages.total_pages" :key="index">
      <span class="page-link bg-primary text-white"
      v-if="item === pages.current_page">{{item}}</span>
      <a class="page-link" href="#" v-else
      @click.prevent="emitPage(item)">{{item}}</a>
    </li>
    -->
      <li
        class="page-item"
        v-for="(item, index) in pages.total_pages"
        :key="index"
        :class="{ active: item == pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="emitPage(item)">{{ item }}</a>
      </li>

      <li class="page-item" :class="{ disabled: pages.current_page == pages.total_pages }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="emitPage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    emitPage(page) {
      this.$emit('emit-page', page); // 傳送要點擊的頁數
    },
  },
};
</script>
