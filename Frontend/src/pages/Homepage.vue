<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import TableRows from '../components/TableRows.vue'

export default {
  components: {
    TableRows
  },
  props: {
  },
  emits: [],
  data() {
    return {
      productData: {}
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchproduk']),
    async getAllProduct() {
      try {
        const data = await this.fetchproduk()

        console.log(this.productDataState);
      } catch (error) {
        console.log(error);
      }
    },
    goToForm(e) {
      e.preventDefault()
      this.$router.push(`/form`)
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['productDataState'])

  },
  created() {
    this.getAllProduct()
  },
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nama</th>
        <th scope="col">Jumlah</th>
        <th scope="col">Deskripsi</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <TableRows v-for="product in productDataState" :key="product.id" :product="product"/>
    </tbody>
  </table>
</template>