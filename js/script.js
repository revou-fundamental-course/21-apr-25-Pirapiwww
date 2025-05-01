// SET DEFAULT PAGE
localStorage.setItem("page", "CeFaren"); // Set default page to CeFaren

// CONVERT FUNCTION
function convert() {
    const page = localStorage.getItem("page");

    // CHECK IF PAGE IS "CeFaren"
    if (page === 'CeFaren') {
        const celsius = parseFloat(document.getElementById('celsius').value);

        // CHECK IF INPUT IS NaN
        if (isNaN(celsius)) {
            alert('Masukkan angka yang valid!');
            return;
        }

        // CONVERT CELSIUS TO FAHRENHEIT
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `(${celsius}°C × (9/5)) + 32 = ${fahrenheit.toFixed(2)}°F`;
    
    // CHECK IF PAGE IS "FarenCe"
    } else if (page === 'FarenCe') {
        const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        
        // CHECK IF INPUT IS NaN
        if (isNaN(fahrenheit)) {
            alert('Masukkan angka yang valid!');
            return;
        }

        // CONVERT FAHRENHEIT TO CELSIUS
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `(${fahrenheit}°F - 32) × (5/9) = ${celsius.toFixed(2)}°C`;
    } 
}

//RESET FUNCTION
function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
}

//REVERSE FUNCTION
function reverse() {
    const page = localStorage.getItem("page");

    // IF PAGE IS "FarenCe"
    if (page === 'FarenCe') {
        // INNER HTML FOR "FarenCe" (FAHRENHEIT TO CELSIUS)
        document.getElementById('content').innerHTML = `
        <div class="container shadow">
            <h1 class="cantarell">
                Temperature Conversion (Celsius to Fahrenheit)
            </h1>   
            <hr class="title">
            
            Note : 
            <p>
                Masukkan suhu derajat Celcius (°C) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F).
            </p>
            <hr>

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <label for="celsius" class="pt">Celsius (°C):</label>
                        <textarea id="celsius" rows="2"></textarea>
                    </div>
                    <div class="col-md-6">
                        <label for="fahrenheit" class="pt">Fahrenheit (°F):</label>
                        <textarea id="fahrenheit" rows="2" readonly></textarea>

                    </div>
                </div>
            </div>

            <div class="buttons">
                <button class="btn-success" onclick="convert()">Konversi</button>
                <button class="btn-danger" onclick="reset()">Reset</button>
                <button class="btn-primary" onclick="reverse()">Reverse</button>
            </div>

            <hr>
            <label for="calculation" class="pt">Cara Kalkulasi:</label>
            <textarea id="calculation" rows="3" readonly></textarea>

            <a onclick="reverse()">Fahrenheit ke Celsius</a>
            <hr>
            <div class="center">
                <h2>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</h2>
                <p>
                    Suhu <em>S</em> dalam derajat Fahrenheit (°F) sama dengan suhu <em>S</em> dalam derajat Celsius (°C) kali <strong>9/5</strong> tambah <strong>32</strong>.
                </p>
                
                <p>
                    <strong><i>S</i><sub>(°F)</sub> = (<i>S</i><sub>(°C)</sub> × 9/5) + 32)</strong>
                </p>
                <p>atau</p>
                <p>
                    <strong><i>S</i><sub>(°F)</sub> = (<i>S</i><sub>(°C)</sub> × 1.8) + 32)</strong>
                </p>
            </div>
        </div>
        `;
        // SET PAGE TO "CeFaren"
        localStorage.setItem("page", "CeFaren");

    // IF PAGE IS "CeFaren"
    } else if (page === 'CeFaren') {
        // INNER HTML FOR "CeFaren" (CELCIUS TO FAHRENHEIT)
        document.getElementById('content').innerHTML = `
        <div class="container shadow">
            <h1 class="cantarell">
                Temperature Conversion (Celsius to Fahrenheit)
            </h1>   
            <hr class="title">
            
            Note :
            <p>
                Masukkan suhu Fahrenheit (°F) ke kotak dibawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk derajat Celcius (°C).
            </p>
            <hr>

            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <label for="fahrenheit" class="pt">Fahrenheit (°F):</label>
                        <textarea id="fahrenheit" rows="2"></textarea>
                    </div>
                    <div class="col-md-6">
                        <label for="celsius" class="pt">Celsius (°C):</label>
                        <textarea id="celsius" rows="2" readonly></textarea>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button class="btn-success" onclick="convert()">Konversi</button>
                <button class="btn-danger" onclick="reset()">Reset</button>
                <button class="btn-primary" onclick="reverse()">Reverse</button>
            </div> 
            <hr>

            <label for="calculation" class="pt">Cara Kalkulasi:</label>
            <textarea id="calculation" rows="3" readonly></textarea>

            <a onclick="reverse()">Celcius ke Fahrenheit</a>
            <hr>
            <div class="center">
                <h2>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h2>
                <p>
                    Suhu <em>S</em> dalam derajat Celsius (°C) sama dengan suhu <em>S</em> dalam derajat Fahrenheit (°F) kurang <strong>32</strong> kali <strong>5/9</strong>.
                </p>
                
                <p>
                    <strong><i>S</i><sub>(°C)</sub> = (<i>S</i><sub>(°F)</sub> - 32) × 5/9)</strong>
                </p>
                <p>atau</p>
                <p>
                    <strong><i>S</i><sub>(°C)</sub> = (<i>S</i><sub>(°F)</sub> - 32) × 0.56)</strong>
                </p>
            </div>
        </div>
        `;
        // SET PAGE TO "FarenCe"
        localStorage.setItem("page", "FarenCe");
    }
}
