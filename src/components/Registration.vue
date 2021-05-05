<template>
  <section>
    <form class="auth-form form">
      <label class = "form-text" for = ""> Имя:
        <input class = "form-control" type = "name">
      </label>
      <form class="form-floating">
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
        <label for="floatingInputValue">Input with value</label>
      </form>

      <label for = ""> Фамилия:
        <input type = "name">
      </label>
      <label for = ""> Пароль:
        <input type = "password">
      </label>
      <label for = ""> Телефон:
        <input type = "tel">
      </label>
    </form>
  </section>
</template>
<script>
export default {
  
}
</script>