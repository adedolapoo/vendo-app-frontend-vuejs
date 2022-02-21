import { defineStore } from 'pinia'
import handleException from '~/utils/handleException'
import { useAuthUserStore } from '~/stores/auth-user'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: {},
    cart: [],
    isLoading: false,
    payment: {}
  }),
  getters: {
    cartTotal(){
      let total = 0;
      this.cart.forEach((product) => {
        let quantity = product.quantity ? product.quantity : 1
        total += product.cost * quantity
      })
      return total;
    }
  },
  actions: {
    setProduct(product : any){
      this.product = product
    },
    /**
     * get Products
     */
    async getProducts() {
      try {
        this.isLoading = true

        //get products
        const { data } = await this.$nuxt.$axios.$get('products')

        this.products = data
      } catch (e) {
        return handleException(e, this.$nuxt)
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Add product to cart
     */
    async addToCart(product: any) {
      try {
        if (this.cart.some((item: any) => item.id === product.id)) {
          throw new Error()
        }
        this.cart.push(product)
        this.$nuxt.$toast.success('Product added to cart')
      } catch (e) {
        this.$nuxt.$toast.error('Product already added to cart')
      }
    },

    /**
     * Add product to cart
     */
    async removeFromCart(product: any) {
      try {
        let productIndex = this.cart.map((item : any) => item.id).indexOf(product.id)
        this.cart.splice(productIndex);

        this.$nuxt.$toast.success('Product removed from cart')
      } catch (e) {
        this.$nuxt.$toast.error('Product could not be removed from cart')
      }
    },

    /**
     * Add product to cart
     */
    async save(formData: any) {
      try {
        let msg;
        //save product
        if (!_.isEmpty(this.product)) {
          await this.$nuxt.$axios.$patch(`products/${this.product.id}`, formData)
          msg = 'Product successfully updated';
        }else{
          await this.$nuxt.$axios.$post('products', formData);
          msg = 'Product successfully created';
        }
        this.$nuxt.$toast.success(msg)
        this.$nuxt.$modal.close()

        this.getProducts()
      } catch (e) {
        return handleException(e, this.$nuxt)
      }
    },

    /**
     *
     * @param formData
     */
    async delete() {
      try {
        let msg;
        //save product
        if (!_.isEmpty(this.product)) {
          await this.$nuxt.$axios.$delete(`products/${this.product.id}`)
          msg = 'Product successfully deleted';

          this.$nuxt.$toast.success(msg)
          this.$nuxt.$modal.close()

          this.getProducts()
        }
      } catch (e) {
        return handleException(e, this.$nuxt)
      }
    },

    /**
     * Add product to cart
     */
    async buy() {
      try {
        //save product
        if (!_.isEmpty(this.cart)) {
          let formData = this.cart.map((product : any)=>{
            return {id: product.id, quantity: product.quantity ? product.quantity : 1}
          })

          const { data } = await this.$nuxt.$axios.$post(`buy`, {
            products: formData
          })

          this.cart = [];
          this.payment = data;

          this.$nuxt.$modal.close();

          this.$nuxt.$toast.success('Payment successful')

          this.$nuxt.$modal.open({
            title: 'Receipt',
            component: 'CartPaymentRecieptModal'
          });

          await useAuthUserStore().fetchUser();

          this.getProducts();

          console.log(data);

          return data;
        }
      } catch (e) {
        return handleException(e, this.$nuxt)
      }
    },
  }
})
