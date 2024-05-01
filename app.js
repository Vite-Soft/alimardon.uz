let element = document.getElementById("connect")

function scrollToTop() {
  element.scrollIntoView(true)
  console.log("asdfdsf")
}
let name1 = document.getElementById("name1")
let phone1 = document.getElementById("phone1")
let select11 = document.getElementById("select11")


function Submit_f() {

  const d = new Date();

  let name = name1.value;
  let phone = phone1.value;
  let tarif = select11.value
  let datetime = d.getDate() + "." + d.getMonth() + 1 + "." + "" + d.getFullYear() + "|" + d.getHours() + ":" + d.getMinutes()

  if (name1.value != "" && phone1.value != "") {

    const apiUrl = 'https://api.telegram.org/bot6822582191:AAHiDtGdk9c8CV9PhNrvgCNj-eDibojfDzE/sendMessage';
    var text = `<b>Ismi:</b> ${name}\n\n`
    text += `<b>Telefon:</b> ${phone}\n\n`
    text += `<b>Tarif:</b> ${tarif}\n\n`
    text += `<b>Sana:</b> ${datetime}\n\n`
    console.log(name, phone, tarif, datetime);
    console.log(text);

    const formData = {
      "chat_id": -1002044058363,
      "text": text,
      "parse_mode": "HTML"
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let btn_send = document.querySelector(".btn_send")
        let form22 = document.querySelector(".form22")
        let form33 = document.querySelector(".form33")

        return response.json(
          form22.style.display = "none",
          form33.style.display = "flex",
          btn_send.style.display = "none",


          window.setTimeout(function () {
            window.location.reload();
          }, 3000)
        );
      })
      .catch(error => {
        console.error('Error:', error);
      });


  }
  else {
    name1.style.border = "2px solid red"
    phone1.style.border = "2px solid red"

  }
}




function myFunction1() {
  name1.style.border = "none"
}
function myFunction2() {
  phone1.style.border = "none"
}




