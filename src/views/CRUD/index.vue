<template>
  <div class = "mx-auto">
    <h3>Выберите нужную таблицу:</h3>
    <div class = "btn-group">
      <router-link class = "btn btn-info" to="/admin/motors">
          Тип
      </router-link>
      <router-link class = "btn btn-info" to="/admin/serials">
          Серия
      </router-link>
      <router-link class = "btn btn-info" to="/admin/manufacturers">
          Произодители
      </router-link>
      <router-link class = "btn btn-info" to="/admin/products">
          Продукты
      </router-link>
    </div>
  </div>
</template>