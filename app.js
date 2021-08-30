// default function

const fetchData = async url => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

// ////////////////////////////////////////////////
document.getElementById('error').style.visibility='hidden'
document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    input.value = '';
    
    if(inputValue == ''){
        document.getElementById('error').style.visibility='visible'
        const errorMsg =  document.getElementById('error');
        errorMsg.innerHTML = `
                <h1 class='text-center text-danger'>No Result Found</h1>
        `
        document.getElementById('parent').textContent='';
    }else{
        document.getElementById('error').style.visibility='hidden'
        fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ae7bebe9617b6d4ca1a59a1a35bf727d`)
        .then(data => {
            console.log(data)
        const parent = document.getElementById('parent');
        parent.innerHTML = `
        <h1>${data.name},${data.sys.country}</h1>
        <h3 class = 'text-danger'><span>max temp : ${data.main.temp_max} </span>&deg;C</h3>
        <h3 class = 'text-success'><span>min temp : ${data.main.temp_max} </span>&deg;C</h3>
        <h4 class = 'text-warning'><span>Wind Speed : ${data.wind.speed} </span>&deg;C</h4>
        <h1 class="lead">${data.weather[0].description}</h1>
        `
    })
    }  
})
