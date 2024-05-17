document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.bana-ulasin')

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    let isValid = true

    // Tüm uyarı mesajlarını temizle
    const warningMessages = form.querySelectorAll('.warning-message')
    warningMessages.forEach((message) => message.remove())

    // İsim-Soyisim alanı doğrulaması
    const nameInput = form.querySelector('input[placeholder="İsim-Soyisim"]')
    if (nameInput.value.trim() === '') {
      isValid = false
      showWarningMessage(nameInput, 'Doldurulmalıdır')
    }

    // Email alanı doğrulaması
    const emailInput = form.querySelector('input[placeholder="Email"]')
    if (emailInput.value.trim() === '') {
      isValid = false
      showWarningMessage(emailInput, 'Doldurulmalıdır')
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false
        showWarningMessage(emailInput, 'Geçerli bir email adresi giriniz.')
      }
    }

    // Adres alanı doğrulaması
    const addressInput = form.querySelector('input[placeholder="Adres"]')
    if (addressInput.value.trim() === '') {
      isValid = false
      showWarningMessage(addressInput, 'Doldurulmalıdır')
    }

    // Konu alanı doğrulaması
    const subjectInput = form.querySelector('input[placeholder="Konu"]')
    if (subjectInput.value.trim() === '') {
      isValid = false
      showWarningMessage(subjectInput, 'Doldurulmalıdır')
    }

    // Cinsiyet alanı doğrulaması
    const genderInputs = form.querySelectorAll('input[name="gender"]')
    let genderSelected = false
    genderInputs.forEach((input) => {
      if (input.checked) {
        genderSelected = true
      }
    })
    if (!genderSelected) {
      isValid = false
      showWarningMessage(
        genderInputs[0].closest('.radio-group'),
        'Doldurulmalıdır'
      )
    }

    // Yaş alanı doğrulaması
    const ageSelect = form.querySelector('#age')
    if (ageSelect.value === '0') {
      isValid = false
      showWarningMessage(ageSelect, 'Doldurulmalıdır')
    }

    // Şehir alanı doğrulaması
    const citySelect = form.querySelector('#city')
    if (citySelect.value === '0') {
      isValid = false
      showWarningMessage(citySelect, 'Doldurulmalıdır')
    }

    // Mesaj alanı doğrulaması
    const messageTextarea = form.querySelector('#mesaj')
    if (messageTextarea.value.trim() === '') {
      isValid = false
      showWarningMessage(messageTextarea, 'Doldurulmalıdır')
    }

    if (isValid) {
      alert('Form başarıyla gönderildi.')
      form.submit()
    }
  })

  function showWarningMessage(inputElement, message) {
    const warningMessage = document.createElement('div')
    warningMessage.className = 'warning-message'
    warningMessage.style.color = 'red'
    warningMessage.textContent = message
    inputElement.insertAdjacentElement('afterend', warningMessage)
  }
})
