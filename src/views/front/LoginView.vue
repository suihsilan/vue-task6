<template>
  這是登入頁面
  <form id="form" class="form-signin">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="username"
        placeholder="name@example.com"
        required
        autofocus
        v-model="user.username"
      />
      <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        required
        v-model="user.password"
      />
      <label for="password">Password</label>
    </div>
    <button
      class="btn btn-lg btn-primary w-100 mt-3"
      @click.prevent="login"
    >
      登入
    </button>
  </form>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {

        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${VITE_APP_URL}v2/admin/signin`

      this.$http.post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$http.defaults.headers.common.Authorization = token
          // window.location = './products.html'
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          this.user.username = ''
          this.user.password = ''
          alert(err.response.data.message)
        })
    }
  }
}
</script>
