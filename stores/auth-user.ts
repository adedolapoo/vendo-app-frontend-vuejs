import { defineStore } from 'pinia'
import { useNuxtApp } from '#app';
import handleException from '~/utils/handleException'

export const useAuthUserStore = defineStore('auth/user', {
  state: () => ({
    user: '',
    isLoading: false
  }),
  getters: {
    fullName: (state: any) : string => {
      return state.user.name;
    },
    currentRole: (state: any) : string => {
      return state.user.role;
    },
    isBuyerCurrentRole(): boolean {
      return this.currentRole === 'buyer'
    },
    isSellerCurrentRole(): boolean {
      return this.currentRole === 'seller'
    },
  },
  actions: {
    /**
     * Login a user
     * @param formData
     */
    async login(formData : object){
      try {
        this.isLoading = true;
        //Login with the nuxt auth module
        await this.$nuxt.$auth.loginWith('local', { data: formData });

        this.$nuxt.$toast.success('You are successfully logged in');
      }catch (e) {
        return handleException(e,this.$nuxt);
      }finally {
        this.isLoading = false;
      }
    },

    /**
     * Register a new user
     * @param formData
     */
    async register(formData : object){
      try {
        this.isLoading = true;
        //Login with the nuxt auth module
        await this.$nuxt.$axios.$post('auth/register', formData);
        this.$nuxt.$toast.success('You are successfully registered');

        //Automatically log the user in on register
        this.login(formData);

      }catch (e) {
        return handleException(e,this.$nuxt);
      }finally {
        this.isLoading = false;
      }
    },

    async fetchUser() {
      const { data } = await this.$nuxt.$axios.$get('auth/me');
      // set the nuxt auth module store
      this.$nuxt.$auth.setUser(data);
      this.user = data;
    },

    /**
     * Deposit Coin for user
     * @param formData
     */
    async deposit(formData : object){
      try {
        //deposit coin.
        const { data } = await this.$nuxt.$axios.$post('deposit', formData);
        this.user = data;

        this.$nuxt.$toast.success('You have successfully deposited your coins');

      }catch (e) {
        return handleException(e,this.$nuxt);
      }finally {
        this.isLoading = false;
      }
    },

    /**
     * Reset user coin
     * @param formData
     */
    async reset(){
      try {
        //deposit coin.
        const { data } = await this.$nuxt.$axios.$post('deposit/reset');
        this.user = data;

        this.$nuxt.$toast.success('You have successfully reset ur deposit');

      }catch (e) {
        return handleException(e,this.$nuxt);
      }finally {
        this.isLoading = false;
      }
    },

    async logout() {
      try {
        //Log user out of all sessions
        await this.$nuxt.$axios.$get('auth/logout/all');

        //Logout user on the browser
        this.$nuxt.$auth.logout();

        this.$nuxt.$toast.success('You are successfully logged out');
      }catch (e) {
        return handleException(e,this.$nuxt);
      }
    }
  }

})
