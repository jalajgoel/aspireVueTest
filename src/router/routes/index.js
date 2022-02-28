import Login from '@/views/login'
import Signup from '@/views/signup'
import NotFound from '@/views/not-found'

export default [
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup, meta: {} }
]
.concat([{ path: '*', component: NotFound }])