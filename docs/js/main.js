// кнопка ночного режима
const btnDarkMode = document.querySelector(".dark-mode-btn");   // создаём переменную для кнопки и выбираем элемент кнопки 

// 1. Проверка темной темы на уровне системных настроек (например если включена настройка в ОС)
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}


// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
}

// 3. Если меняются системные настройки, меняем тему

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

// 4. Включение темной темы по кнопку
btnDarkMode.onclick = function () {                             // функция которая реагирует на нажатие на кнопку 
    btnDarkMode.classList.toggle("dark-mode-btn--active");      // toogle добавляет класс dark-mode-btn--active если его нет, и удаляет если он есть в описании кнопки
    const isDark = document.body.classList.toggle('dark');      // замена класса dark которые переключает темную и светлую тему

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');               //
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}

