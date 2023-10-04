<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  components: {
  },
  data() {
    return {
      FormData: {
        Nama: '',
        Jumlah: 0,
        Deskripsi: '',
        Status: ''
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['postProduk', 'fetchProdukById', 'editProduk']),
    async submitHandler() {
      try {
        if (this.$route.params.id) {
          const data = await this.editProduk(this.FormData)

          this.$router.push(`/`)
        } else {
          const data = await this.postProduk(this.FormData)

          this.$router.push(`/`)
        }

      } catch (error) {
        console.log(error);
      }
    },
    async editHandler() {
      try {
        const data = await this.fetchProdukById(this.$route.params.id)

        this.FormData = data.product[0]

      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    if (this.$route.params.id) {
      this.editHandler()
    }
  },
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="exampleFormControlInput1">Nama</label>
      <input v-model="FormData.Nama" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nama">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Jumlah</label>
      <input v-model="FormData.Jumlah" type="number" class="form-control" id="exampleFormControlInput1"
        placeholder="Jumlah">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Deskripsi</label>
      <textarea v-model="FormData.Deskripsi" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Status</label>
      <select v-model="FormData.Status" class="form-control" id="exampleFormControlSelect1">
        <option :value="true">Masuk</option>
        <option :value="false">Keluar</option>
      </select>
    </div><br>
    <button type="submit" class="btn btn-secondary">Submit</button>
  </form>
</template>