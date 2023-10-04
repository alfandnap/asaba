import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      productDataState: []
    }
  },
  actions: {
    async fetchproduk() {
      try {
        const {data} = await axios({
          url: 'http://localhost:8080/products',
          method: 'GET',
        })

        this.productDataState = data.products

        return data
        // this.products = data
      } catch (error) {
        console.log(error);
      }
    },
    async postProduk(formData) {
      try {
        const { data } = await axios({
          url: 'http://localhost:8080/products',
          method: 'post',
          data: formData
        })

        return data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProdukById(id) {
      try {
        const { data } = await axios({
          url: `http://localhost:8080/products/${id}`,
          method: 'get',
        })

        return data
        // this.products = data
      } catch (error) {
        console.log(error);
      }
    },
    async editProduk(value) {
      try {
        const { data } = await axios({
          url: `http://localhost:8080/products/${value.ID}`,
          method: 'put',
          data: value
        })

        return data
        // this.products = data
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduk(value) {
      try {
        const { data } = await axios({
          url: `http://localhost:8080/products/${value.ID}`,
          method: 'delete',
        })

        this.productDataState = this.productDataState.filter(item => item.ID !== value.ID);

        return data
      } catch (error) {
        console.log(error);
      }
    },
  }
})
