function validated() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var email_error = document.querySelector('.email_error')
  var pass_error = document.querySelector('.pass_error')

  if (email.trim() == '') {
    email_error.style.display = 'block'
  } else {
    email_error.style.display = 'none'
  }

  if (password.trim() == '') {
    pass_error.style.display = 'block'
  } else {
    pass_error.style.display = 'none'
  }

  // İki alan da boşsa her iki hata mesajını da göster
  if (email.trim() == '' && password.trim() == '') {
    email_error.style.display = 'block'
    pass_error.style.display = 'block'
    return false
  }

  // Diğer özel doğrulamaları buraya ekleyebilirsiniz

  return true
}

// E-posta alanı doldurulduğunda hata mesajını gizle
document.getElementById('email').addEventListener('input', function () {
  document.querySelector('.email_error').style.display = 'none'
})

// Şifre alanı doldurulduğunda hata mesajını gizle
document.getElementById('password').addEventListener('input', function () {
  document.querySelector('.pass_error').style.display = 'none'
})
