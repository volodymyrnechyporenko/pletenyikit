<template>

<div class="heading">
    <h1>Замовлення</h1>
</div>

<div class="item-all">
    <div class="item-left">
            <div class="form">
            <h3 class="form_title">Нам можна написати</h3>
            <form action="sendmail.php" method="POST" @submit.prevent="formSend()" id="form" class="form_body">
                <div class="form_item">
                    <label for="formName" class="form_label">Ім'я*:</label>
                    <input type="text" id="formName" v-model="firstName" name="firstname" class="form_input">
                </div>
                <div class="form_item">
                    <label for="formSurname" class="form_label">Прізвище*:</label>
                    <input type="text" id="formSurname" v-model="lastName" name="lastname" class="form_input">
                </div>
                <div class="form_item">
                    <label for="formEmail" class="form_label">Електронна адреса*:</label>
                    <input type="text" id="formEmail" v-model="email" name="email" class="form_input">
                </div>
                <div class="form_item">
                    <label for="formMessage" class="form_label">Повідомлення*:</label>
                    <textarea name="message" id="formMessage" v-model="message" cols="30" rows="10" class="form_input"></textarea>
                </div>
                <button type="submit" class="form_button">Надіслати</button>
            </form>
        </div>
    </div>
    <div class="item-right">
        <h3>Умови догляду</h3>
        <p>До кожного виробу, який може викликати запитання про прання, я додаю в пакування роздруковані умови догляду. До рукавиць і мітенок не додаю, бо їх важко розтягти, зіпсути, вони не линяють і я свої перу зі всім пранням.</p>
        <p>Наявні тут подушки діляться на подушки-іграшки та інтер'єрні плетені подушки.</p>
        <p>Подушки-іграшки неможливо зробити зі зйомною плетеною частиною, оскільки там всюди нашиті кінцівки або подушку прошито наскрізь. Тому я раджу прати їх вручну та сушити на горизонтальній поверхні, щоб наповнювач не збився в один бік та не розтягнув плетену частину. Я знаю, що деякі мої замовники_ці перуть подушки в пралці, і кажуть, що все добре. Якщо ваша пралка має режим делікатного прання та дійсно делікатно пере, то, думаю, можна попрати і в ній. Проте це на ваш розсуд!</p>
        <p>Також в наявності є квадратні інтер'єрні подушки. Я вшиваю в плетену частину застібку-блискавку, щоб можна було той плетений напірник зняти і попрати окремо від подушки. Подушки шию з бавовни та набиваю, як і решту, холофайбером.</p>
    </div>
</div>
  
</template>

<script>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
    setup: () => ({ v$: useVuelidate() }),
    data () {
        return {
            form: '#form',
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    },
    validations () {
        return {
            firstName: { required },
            lastName: { required },
            email: { email, required },
            message: { required }
        }
    },
    methods: {
        async formSend() {
            this.v$.$validate()
            if (!this.v$.$error) {
                form.classList.add('_sending');
                const formData = new FormData(form);
                const requestOptions = {
                    method: "POST",
                    body: formData
                };
                const response = await fetch('./sendmail.php', requestOptions);
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    form.reset();
                    form.classList.remove('_sending');
                } else {
                    alert("Помилка");
                    form.classList.remove('_sending');
                }
            } else {
                alert('Будь ласка заповніть всі поля форми');
                }
		}
    }
}
</script>

<style>
</style>