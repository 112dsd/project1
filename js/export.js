

const form = document.querySelector('form[name="form"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const nickname = formData.get('nickname');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('http://localhost:3000/regis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname, email, password })
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Неправильно ввдена почта или пароль");
  }
});


const login = document.querySelector("form[name=login]")

login.addEventListener('submit',async(event)=>{
  event.preventDefault()

  const formLogin = new FormData(login);
  const email = formLogin.get('email');
  const password = formLogin.get('password');
  
  try {
    const responseLog = await fetch('http://localhost:3000/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password })
    });

    const dataLog = await responseLog.json();
    console.log(dataLog, );
    document.cookie = "ID="+dataLog[0].id
    document.cookie = "nickname="+dataLog[0].nickname
    document.cookie = "brl="+dataLog[0].BRL
    document.cookie = "usd="+dataLog[0].USD
    window.open("./234131234.html","_self")
  } catch (err) {
    console.log("Неправильно ввдена почта или пароль");
  }
})



