<template>
  <footer>
    <div class="foot-all">
      <div class="foot-left">
        <h3>Плетений КіТ</h3>
        <h4>Найгарніша реінкарнація пряжі</h4>
        <p>
          Наші вироби можна замовити тут, у фейсбук, вайбері чи телеграмі, також
          Плетений КіТ доступний на платформі
          <a href="https://pletenyikit.crafta.ua/" target="_blank">Crafta.ua</a
          >. Ви отримаєте відповіді на можливі питання та вичерпну інформацію
          про вироби.
        </p>
        <p>
          До замовлення ми додаємо стильні умови догляду, візитки та крафтові
          пакети з ручками для подушок, тож, отримуючи наш виріб, ви можете не
          турбуватись про вигляд пакування, якщо виріб призначено на подарунок.
        </p>
        <p>
          Доступні опції доставки: Нова пошта, Укрпошта, Justin чи самовивіз.
        </p>
      </div>
      <div class="foot-right">
        <h3>Маєте питання чи пропозиції?</h3>
        <p>
          З нами можна зв'язатись за номером телефону, у Viber та Telegram (з
          10:00 до 20:00):
        </p>
        <p>+38 063 054 63 82</p>
        <p>або у соціальних мережах:</p>
        <p>
          <a href="https://www.facebook.com/PletenyiKiT" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x" />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.instagram.com/pletenyi_kit/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="3x" />
          </a>
        </p>
        <p>чи через платформу Crafta.ua:</p>
        <p>
          <a href="https://pletenyikit.crafta.ua/" target="_blank"
            >pletenyikit.crafta.ua</a
          >
        </p>
        <p>© PletenyiKit.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: #a32720;
  color: #cbac6a;
  width: 100%;
  margin-top: auto;
  border-top: 3px solid #cbac6a;
}

.foot-all {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 8rem;
  flex-direction: row;
}

@media screen and (max-width: 767px) {
  .foot-all {
    padding: 0 1rem;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .foot-all {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 992px) and (orientation: portrait) {
  .foot-all {
    flex-direction: column;
    align-items: start;
  }
}

.foot-left,
.foot-right {
  width: 45%;
}

@media screen and (max-width: 992px) and (orientation: portrait) {
  .foot-left,
  .foot-right {
    width: 100%;
  }
}
</style>
