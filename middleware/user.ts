import type { Middleware } from '@nuxt/types';
import { useAuthUserStore } from '~/stores'

export default <Middleware> async function ({ redirect }) {
  try{
    const authUserStore = useAuthUserStore();

    /**
     * fetch current logged in user
     */
    await authUserStore.fetchUser();

    /**
     * Redirect if logged in user is not a customer/user
     */
    if(!authUserStore.isBuyerCurrentRole){
      redirect('/admin')
    }

  }catch (e) {

  }
}
