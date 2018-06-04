(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton')

    var clickMe = function () {
      let xhr = new XMLHttpRequest()

      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(typeof JSON.parse(this.responseText)[0])
            document.getElementById("hbrsOutput").innerHTML =
            JSON.stringify(this.responseText)
        }
      }
      xhr.open('GET', '/products', true)
      xhr.send()
    }

    console.log(button)

    button.addEventListener('click', clickMe, false)
  })
})()