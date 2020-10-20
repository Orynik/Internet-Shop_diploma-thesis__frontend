<template>
  <div class = "mx-auto">
    <h3>Выберите нужную табилцу:</h3>
    <div class = "btn-group">
      <router-link class = "btn btn-info" to="/admin/motors">
          Типы моторов
      </router-link>
      <router-link class = "btn btn-info" to="/admin/serials">
          Серии моторов
      </router-link>
      <router-link class = "btn btn-info" to="/admin/manufacturers">
          Произодители Моторов
      </router-link>
      <router-link class = "btn btn-info" to="/admin/products">
          Продукты
      </router-link>
    </div>
  </div>
</template>