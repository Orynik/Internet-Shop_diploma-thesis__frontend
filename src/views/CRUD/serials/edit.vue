  <template>
  <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
          <label for="Serial">Тип</label>
          <input class = "form-control" name = "Serial" type="text" v-model = "Serial">
        </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Изменить</button>
      </div>
    </form>
    <router-link :to = "{name: 'AdminMotors'}" class = "btn btn-success mt-3">
      Назад
    </router-link>
  </div>
</template>

<script>
import api from "@/api/index.js"

export default {
  data(){
    return {
      id: 0,
      Serial: "",
    }
  },
  methods:{
    validateForm(){

      api.updateSerial({id: this.id,Serial: this.Serial}).then(
        () =>{
          window.location.href = '/admin/serials'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
        }
      )
      // TODO: Исправить костыль с редиректом
    }
  },
  mounted(){
      api.getSerialById(this.$route.params.id)
      .then(res => {
        this.id = res.id
        this.Serial = res.Serial
      })
  }
}
</script>