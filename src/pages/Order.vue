<template>
  <div class="heading">
    <h1>{{ contactTitle }}</h1>
  </div>

  <div class="order-all">
    <div class="item-left">
      <div class="form">
        <h3 class="form_title">{{ formTitle }}</h3>
        <form
          action="sendmail.php"
          method="POST"
          @submit.prevent="formSend()"
          id="form"
          class="form_body"
        >
          <div class="form_item">
            <label for="formName" class="form_label">Ім'я*:</label>
            <input
              type="text"
              id="formName"
              v-model="firstName"
              name="firstname"
              class="form_input"
            />
          </div>
          <div class="form_item">
            <label for="formSurname" class="form_label">Прізвище*:</label>
            <input
              type="text"
              id="formSurname"
              v-model="lastName"
              name="lastname"
              class="form_input"
            />
          </div>
          <div class="form_item">
            <label for="formEmail" class="form_label"
              >Електронна адреса*:</label
            >
            <input
              type="text"
              id="formEmail"
              v-model="email"
              name="email"
              class="form_input"
            />
          </div>
          <div class="form_item">
            <label for="formMessage" class="form_label">Повідомлення*:</label>
            <textarea
              name="message"
              id="formMessage"
              v-model="message"
              cols="30"
              rows="10"
              class="form_input"
            ></textarea>
          </div>
          <button type="submit" class="form_button">Надіслати</button>
        </form>
      </div>
    </div>
    <div class="item-right">
      <h3>{{ careConditionsTitle }}</h3>
      <p v-for="careCondition in careConditions">{{ careCondition }}</p>
    </div>
  </div>
</template>

<script>
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { contactTitle, formTitle, careConditionsTitle, careConditions } from '../data/texts';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      contactTitle: contactTitle,
      formTitle: formTitle,
      careConditionsTitle: careConditionsTitle,
      careConditions: careConditions,
      form: '#form',
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { email, required },
      message: { required }
    };
  },
  methods: {
    async formSend() {
      this.v$.$validate();
      if (!this.v$.$error) {
        form.classList.add('_sending');
        const formData = new FormData(form);
        const requestOptions = {
          method: 'POST',
          body: formData
        };
        const response = await fetch('./sendmail.php', requestOptions);
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          form.reset();
          form.classList.remove('_sending');
        } else {
          alert('Помилка');
          form.classList.remove('_sending');
        }
      } else {
        alert('Будь ласка заповніть всі поля форми');
      }
    }
  }
};
</script>

<style>
.form_body {
  position: relative;
}

.form_body::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(203, 172, 106, 0.4) url('../assets/img/giphy.gif') center / 50px
    no-repeat;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease 0s;
}

.form_body._sending::after {
  opacity: 1;
  visibility: visible;
}

.form_input {
  border: 0.104vw solid #aea28f;
  border-radius: 0.156vw;
  background-color: #2b2b2a;
  color: #aea28f;
  width: 99%;
  margin-bottom: 0.625vw;
}

.form_input:focus {
  border: 0.2rem solid #aea28f;
}

textarea {
  resize: vertical;
  outline: none;
}

input[type='text'],
input[type='tel'] {
  height: 2.6em;
  outline: none;
}

button {
  background-color: #aea28f;
  color: #ffffff;
  font: 100% 'RepoRegular';
  font-weight: 600;
  margin-top: 0.5em;
  border: none;
}

button:hover {
  cursor: pointer;
  background-color: #cbac6a;
  transition: background-color 0.5s ease 0s;
}

.form_button {
  width: 100%;
}

.form_button,
.order_button {
  font-size: 1.4em;
  padding: 0.6em 0.8em;
  border-radius: 0.3rem;
}
</style>
