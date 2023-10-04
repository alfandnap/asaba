<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  props: ['product'],
  methods: {
    ...mapActions(useCounterStore, ['deleteProduk']),
    editHandler(e) {
      e.preventDefault();
      this.$router.push(`/edit/${this.product.id}`)
    },
    async deleteHandler(e) {
      try {
        e.preventDefault()

        this.$swal.fire({
          title: 'Do you want to delete?',
          // showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'delete',
          denyButtonText: `Don't save`,
        }).then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {


            const data = await this.deleteProduk(this.product)

            if (data?.message == `${this.product.nama_produk} success to delete`) {
              await this.$router.push(`/`)
            }

            await this.$swal.fire('Deleted!', '', 'success')

          } else if (result.isDenied) {
            this.$swal.fire('Changes are not saved', '', 'info')
          }
        })


      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <tr>
    <th scope="row">{{ product.ID }}</th>
    <td>{{ product.Nama }}</td>
    <td>{{product.Jumlah}}</td>
    <td>{{product.Deskripsi}}</td>
    <td>{{product.Status}}</td>
    <td>
      <div class="icon-container">
        <button @click="editHandler" type="button" class="btn btn-light">
          <i class="bi bi-pencil"></i>
        </button>
          <button @click="deleteHandler" type="button" class="btn btn-light">
            <i class="bi bi-trash3-fill"></i>
          </button>
      </div>
    </td>
  </tr>
</template>

<style>
.icon-container {
  display: flex;
  /* justify-content: space-between; */
}

.bi {
  display: flex;
  /* margin: 3px; */
}
</style>