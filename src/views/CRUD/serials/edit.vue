  <template>
  <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
          <label for="Serial">Тип</label>
          <input class = "form-control" name = "Serial" type="text" v-model = "raw.Serial">
        </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Изменить</button>
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
      raw: {}
    }
  },
  methods:{
    validateForm(){
      api.updateSerial(this.raw).then(
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
        this.raw = res
      })
  }
}
</script>