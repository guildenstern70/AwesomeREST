exports = this

showError = ->
  $('#errorMessage').show()
  $('#password1grp').addClass 'has-error'
  $('#password1grp').addClass 'has-feedback'
  $('#password2grp').addClass 'has-error'
  $('#password2grp').addClass 'has-feedback'
  return

hideError = ->
  $('#errorMessage').hide()
  $('#password1grp').removeClass 'has-error', ''
  $('#password1grp').removeClass 'has-feedback', ''
  $('#password2grp').removeClass 'has-error', ''
  $('#password2grp').removeClass 'has-feedback', ''
  return

exports.submitForm = ->
  pwd1 = $('#newPassword').val()
  pwd2 = $('#confirmation').val()
  if pwd1.length < 8 or pwd2.length < 8
    $('#errorMessage').text 'Minimo 8 caratteri.'
    showError()
    return false
  if pwd1 == pwd2
    console.log 'Password validation passed'
    $('#passwordForm').submit()
  else
    console.log 'Password validation KO'
    showError()
    return false
  return

$ ->
  $('#newPassword').click ->
    $('#newPassword').val ''
    $('#confirmation').val ''
    hideError()
    return
  hideError()
  return

exports = submitForm
