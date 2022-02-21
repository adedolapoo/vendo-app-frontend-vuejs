import type { Middleware } from '@nuxt/types';
import { useAuthUserStore } from '~/stores'

export default <Middleware> async function ({ redirect }) {
  const authUserStore = useAuthUserStore();
  /**
   * fetch current user
   */
  await authUserStore.fetchUser();

  /**
   * redirect if the loggedin user is a user
   */
  if(authUserStore.isBuyerCurrentRole){
    redirect('/account')
  }
}
