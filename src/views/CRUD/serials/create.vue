  <template>
  <div>
    <h3 class = "text-center">Создание записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
          <label for="Serial">Тип</label>
          <input class = "form-control" name = "Serial" type="text" v-model = "Serial">
        </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Создать</button>
      </div>
    </form>
    <router-link :to = "{name: 'AdminSerials'}" class = "btn btn-success mt-3">
      Назад
    </router-link>
  </div>
</template>

<script>
import api from "@/api/AllRequestApi.js"

export default {
  data(){
    return {
      Serial: ""
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей

      api.createSerial({Serial: this.Serial}).then(
        () =>{
           this.$routes.push('/admin/serials')
        },
        (err) => {
          alert(err)
        }
      )
      // TODO: Исправить костыль с редиректом
    }
  }
}
</script>