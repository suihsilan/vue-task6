<template>
這是購物車頁面
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <!--購物車列表-->
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button
              :disabled="item.id === loadingItem"
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteItem(item)"
            >
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">已套用優惠券</div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <select
                :disabled="item.id === loadingItem"
                name=""
                id=""
                v-model="item.qty"
                @change="updateCartItem(item)"
              >
                <option
                  :value="i"
                  v-for="i in 20"
                  :key="i + '12345678'"
                >
                  {{ i }}
                </option>
              </select>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            {{ item.total }} 元
          </td>
        </tr>
      </template>
      <!-- <div v-else>目前購物車為空</div> -->
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.final_total }} 元</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }} 元</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [], // 產品列表
      productId: '',
      cart: {},
      loadingItem: '', // 存id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      // 取得購物車列表方法
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          // console.log("購物車:", res.data.data);
          // 存入購物車列表
          this.cart = res.data.data
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    updateCartItem (item) {
      // item中的購物車的id ,產品的id
      // 更新購物車資料(這段會比較複雜)
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      // console.log("data", data, "購物車id", item.id);
      // 發送ajax之前先將品項的id存在變數裡
      this.loadingItem = item.id
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          // 更新購物車後
          // console.log("更新購物車:", res.data.data);
          this.cart = res.data.data
          // 重新取的購物車列表
          this.getCarts()
          // 已發送請求更新資料後再把這個變數清除，才可以再繼續選擇數量
          this.loadingItem = null
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    deleteItem (item) {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((res) => {
          // 刪除購物車後
          // console.log("刪除購物車:", res.data);
          // 重新取的購物車列表
          this.getCarts()
          this.loadingItem = null
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    clearCart () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.getCarts()
          this.loadingItem = null
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    }
  },
  mounted () {
    // 執行取的購物車列表
    this.getCarts()
  }
}
</script>
