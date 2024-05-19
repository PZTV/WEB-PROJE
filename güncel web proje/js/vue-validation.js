new Vue({
  el: '#app',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        address: '',
        subject: '',
        gender: '',
        age: '',
        city: '',
        message: '',
      },
      errors: {},
      genderOptions: [
        { label: 'Erkek', value: 'man' },
        { label: 'Kadın', value: 'woman' },
        { label: 'Belirtmek İstemiyor', value: 'unknown' },
      ],
    }
  },
  methods: {
    submitFormVue() {
      // Tüm hataları temizle
      this.errors = {}

      if (this.validateForm()) {
        // Formu gönder
        console.log('Form gönderildi (Vue.js)')
        this.$el.querySelector('form').reset()
        this.resetForm() // Formu sıfırla
      } else {
        // Form hatalı
        console.log('Form hatalı, lütfen gerekli alanları doldurun (Vue.js).')
      }
    },
    validateForm() {
      var isValid = true

      // İsim doğrulaması
      if (!this.formData.name) {
        this.$set(
          this.errors,
          'name',
          'İsim-Soyisim alanı boş olamaz (Vue.js).'
        )
        isValid = false
      }

      // Email doğrulaması
      if (!this.formData.email) {
        this.$set(this.errors, 'email', 'Email alanı boş olamaz (Vue.js).')
        isValid = false
      }

      // Adres doğrulaması
      if (!this.formData.address) {
        this.$set(this.errors, 'address', 'Adres alanı boş olamaz (Vue.js).')
        isValid = false
      }

      // Konu doğrulaması
      if (!this.formData.subject) {
        this.$set(this.errors, 'subject', 'Konu alanı boş olamaz (Vue.js).')
        isValid = false
      }

      // Cinsiyet doğrulaması
      if (!this.formData.gender) {
        this.$set(
          this.errors,
          'gender',
          'Cinsiyet seçimi yapılmalıdır (Vue.js).'
        )
        isValid = false
      }

      // Yaş doğrulaması
      if (!this.formData.age) {
        this.$set(this.errors, 'age', 'Yaş seçimi yapılmalıdır (Vue.js).')
        isValid = false
      }

      // Şehir doğrulaması
      if (!this.formData.city) {
        this.$set(this.errors, 'city', 'Şehir seçimi yapılmalıdır (Vue.js).')
        isValid = false
      }

      // Mesaj doğrulaması
      if (!this.formData.message) {
        this.$set(this.errors, 'message', 'Mesaj alanı boş olamaz (Vue.js).')
        isValid = false
      }

      return isValid
    },
    resetForm() {
      // Formu sıfırla
      this.formData = {
        name: '',
        email: '',
        address: '',
        subject: '',
        gender: '',
        age: '',
        city: '',
        message: '',
      }

      // Tüm hataları temizle
      this.errors = {}
    },
  },
})
