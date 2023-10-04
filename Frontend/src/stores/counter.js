import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      productDataState: []
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
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
    async fetchcategory() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/categories',
          method: 'get',
        })

        return data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchstatus() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/statuses',
          method: 'get',
        })

        return data
        // this.products = data
      } catch (error) {
        console.log(error);
      }
    },
    async postProduk(formData) {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/produks',
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
          url: `http://localhost:3000/produks/${id}`,
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
          url: `http://localhost:3000/produks/${value.id}`,
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
          url: `http://localhost:3000/produks/${value.id}`,
          method: 'delete',
        })

        this.productDataState = this.productDataState.filter(item => item.id !== value.id);

        return data
      } catch (error) {
        console.log(error);
      }
    },
  }
})
