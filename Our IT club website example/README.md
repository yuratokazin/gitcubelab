## Общий стиль сайта

Ниже — базовая структура файлов `index.html` и `styles.css`, воссоздающая **общий стиль** сайта algorithmika.org (на момент анализа): лаконичный дизайн, светлая тема, чёткая типографика, адаптивность.

> **Примечание**: это *стилизованный прототип* — он повторяет визуальные паттерны, но не копирует точный контент и JS-логику оригинального сайта.

------

### 1. `index.html`

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GITcube — обучение программированию</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="/" class="logo">GITcube</a>
            <nav class="nav">
                <a href="#courses" class="nav-link">Курсы</a>
                <a href="#about" class="nav-link">О нас</a>
                <a href="#contacts" class="nav-link">Контакты</a>
            </nav>
            <button class="burger-menu">☰</button>
        </div>
    </header>

    <main class="main">
        <section class="hero">
            <div class="container">
                <h1>Учись программировать с нуля</h1>
                <p class="subtitle">Интерактивные курсы по программированию для школьников и взрослых. Подготовка к ОГЭ и ЕГЭ.</p>
                <a href="#signup" class="btn btn-primary">Начать обучение</a>
            </div>
        </section>

        <section id="courses" class="courses">
            <div class="container">
                <h2>Наши курсы</h2>
                <div class="cards">
                    <div class="card">
                        <h3>Веб-разработка</h3>
                        <p>Создавайте сайты на HTML, CSS и JavaScript.</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Разработка IT-продукта</h3>
                        <p>Подготовка к олимпиадам, тех. интервью и стартап</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Python для начинающих</h3>
                        <p>Освойте синтаксис и пишите первые программы за 3 месяца.</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Информатика</h3>
                        <p>Подготовка к ОГЭ и ЕГЭ по информатике.</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Математика</h3>
                        <p>Подготовка к ОГЭ и ЕГЭ по математике.</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>Физика</h3>
                        <p>Подготовка к ОГЭ и ЕГЭ по физике.</p>
                        <a href="#" class="btn btn-outline">Подробнее</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <h2>Почему мы?</h2>
                <ul class="features">
                    <li>Интерактивные задания с автоматической проверкой</li>
                    <li>Преподаватели — победители олимпиад</li>
                    <li>Гибкий график обучения</li>
               <!-- <li>Сертификат по окончании курса</li> -->
                </ul>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 GITcube. Все права защищены.</p>
            <nav class="footer-nav">
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Договор оферты</a>
            </nav>
        </div>
    </footer>
</body>
</html>
```

Представленный HTML‑код — это уже **структурная основа веб‑сайта образовательной платформы «GITcube»**, посвящённой обучению программированию. Разберём его ключевые блоки и особенности.

### Общая структура документа

**Документо‑тип и метаданные**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GITcube — обучение программированию</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

- `<!DOCTYPE html>` — объявление стандарта HTML5.

- `<html lang="ru">` — корневой элемент с указанием языка страницы (русский).

- <meta charset="UTF-8"> — кодировка UTF‑8 для поддержки кириллицы и других символов.

- <meta name="viewport"> — адаптация под мобильные устройства (отзывчивый дизайн).

- `<title>` — заголовок страницы в браузере.

- `<link rel="stylesheet">` — подключение внешнего CSS‑файла для стилизации.

**Тело страницы (`<body>`)**
Содержит семантические блоки: `<header>`, `<main>`, `<footer>`.

------

### Разбор основных секций

#### 1. Шапка (`<header>`)

```html
<header class="header">
    <div class="container">
        <a href="/" class="logo">GITcube</a>
        <nav class="nav">
            <a href="#courses" class="nav-link">Курсы</a>
            <a href="#about" class="nav-link">О нас</a>
            <a href="#contacts" class="nav-link">Контакты</a>
        </nav>
        <button class="burger-menu">☰</button>
    </div>
</header>
```

- **Логотип** — ссылка на главную страницу.
- **Навигация** — меню с якорями (`#courses`, `#about`, `#contacts`).
- **Бургер‑меню** — кнопка для мобильного меню (символ ☰).

#### 2. Главный экран (`<section class="hero">`)

```html
<section class="hero">
    <div class="container">
        <h1>Учись программировать с нуля</h1>
        <p class="subtitle">Интерактивные курсы по веб-разработке, Python и разработке баз данных для школьников и взрослых</p>
        <a href="#signup" class="btn btn-primary">Начать обучение</a>
    </div>
</section>
```

- **Заголовок H1** — основное послание сайта.
- **Подзаголовок** — описание направлений обучения.
- **Кнопка** — призыв к действию (переход к форме регистрации).

#### 3. Раздел «Наши курсы» (`<section id="courses">`)

```html
<section id="courses" class="courses">
    <div class="container">
        <h2>Наши курсы</h2>
        <div class="cards">
            <div class="card">
                <h3>Веб-разработка</h3>
                <p>Создавайте сайты на HTML, CSS и JavaScript.</p>
                <a href="#" class="btn btn-outline">Подробнее</a>
            </div>
            <!-- Ещё два курса -->
        </div>
    </div>
</section>
```

- **Заголовок H2** — название раздела.
- **Карточки курсов** — три блока с названиями, описаниями и кнопками «Подробнее».
- **Классы** (`card`, `btn-outline`) — для стилизации через CSS.

#### 4. Раздел «Почему мы?» (`<section id="about">`)

```html
<section id="about" class="about">
    <div class="container">
        <h2>Почему мы?</h2>
        <ul class="features">
            <li>Интерактивные задания с автоматической проверкой</li>
            <li>Преподаватели — победители олимпиад</li>
            <li>Гибкий график обучения</li>
            <li>Сертификат по окончании курса</li>
        </ul>
    </div>
</section>
```

- **Список преимуществ** — 4 пункта, подчёркивающих уникальность платформы.

#### 5. Подвал (`<footer>`)

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2025 GITcube. Все права защищены.</p>
        <nav class="footer-nav">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Договор оферты</a>
        </nav>
    </div>
</footer>
```

- **Копирайт** — информация о правах.
- **Нижнее меню** — ссылки на юридические документы.

------

### Ключевые особенности кода

1. **Семантическая разметка**
   Используются теги `<header>`, `<main>`, `<section>`, `<footer>`, что улучшает доступность и SEO.
2. **Адаптивность**
   - Мета‑тег `viewport` для мобильных устройств.
   - Класс `container` (предположительно, для центрирования контента).
   - Бургер‑меню для мобильной навигации.
3. **Якорные ссылки**
   Атрибуты `id` (`#courses`, `#about`) позволяют переходить к разделам страницы.
4. **Классовая система**
   - `btn`, `btn-primary`, `btn-outline` — стили кнопок.
   - `card` — карточки курсов.
   - `features` — список преимуществ.
5. **Доступность**
   - Язык указан (`lang="ru"`).
   - Ссылки имеют осмысленные тексты (не «кликните здесь»).

------

### Что можно улучшить

1. **Атрибуты `alt` для изображений**
   Если на сайте есть картинки, нужно добавить описания для скринридеров.
2. **Роль кнопки меню**
   Для бургер‑меню стоит указать `aria-label` (например, `aria-label="Открыть меню"`).
3. **Ссылки на скрипты**
   В коде нет подключения JavaScript. Если интерактивность нужна, добавьте `<script src="script.js"></script>` перед `</body>`.
4. **Валидация форм**
   Если есть формы (например, регистрация), нужно добавить атрибуты `required`, `type` и т.д.
5. **Микроразметка**
   Для SEO можно использовать Schema.org (например, для курсов).

------

### Итог

Код представляет собой **чистую, семантически правильную основу** для образовательного сайта. Он готов к стилизации через CSS и  добавлению интерактивности через JavaScript. Для полноценного запуска  останется:

- Написать стили в `styles.css`.
- Добавить скрипты (если нужны).
- Заполнить контент (изображения, тексты).
- Протестировать на разных устройствах.

---



Приведённый HTML‑код — **структура веб‑страницы образовательного проекта «GITcube»** (обучение программированию и подготовке к экзаменам). Ниже — подробный разбор и рекомендации.

------

### Общая структура

**1. Документо‑тип и метаданные**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">  <!-- ОШИБКА: должно быть "UTF-8" → "UTF-8" -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GITcube — обучение программированию</title>
    <link rel="stylesheet" href="styles.css">  <!-- ОШИБКА: rel="stylesheet" → rel="stylesheet" -->
</head>
```

**Исправления:**

- `charset="UTF-8"` → `charset="UTF-8"` (стандартная кодировка).
- `rel="stylesheet"` → `rel="stylesheet"` (правильное значение атрибута).

**2. Шапка (`<header>`)**

- Логотип-ссылка на главную.
- Навигационное меню с якорями (`#courses`, `#about`, `#contacts`).
- Кнопка «бургер» для мобильного меню (визуально — символ ☰).

**3. Основной контент (`<main>`)**

- **Главный экран (`<section class="hero">`)**
  - Заголовок: *«Учись программировать с нуля»*.
  - Подзаголовок о курсах и подготовке к ОГЭ/ЕГЭ.
  - Кнопка *«Начать обучение»* (ведёт к форме регистрации).
- **Раздел «Курсы» (`<section id="courses">`)**
  - 6 карточек курсов (веб‑разработка, Python, подготовка к экзаменам и др.).
  - Каждая карточка содержит:
    - Название курса.
    - Краткое описание.
    - Кнопку *«Подробнее»* (контурная, стиль `.btn-outline`).
- **Раздел «О нас» (`<section id="about">`)**
  - Заголовок *«Почему мы?»*.
  - Список преимуществ (интерактивные задания, опытные преподаватели, гибкий график).
  - Один пункт закомментирован (`<!-- <li>Сертификат...</li> -->`).

**4. Подвал (`<footer>`)**

- Копирайт: *«© 2025 GITcube. Все права защищены»*.

- Ссылки на документы («Политика конфиденциальности», «Договор оферты»).

---

### Ключевые классы и их назначение

- **`.container`** — центрирование и ограничение ширины контента.
- **`.hero`** — градиентный фон, акцентный блок с призывом к действию.
- **`.cards`** — сетка для карточек курсов (автоматический перенос на мобильных).
- **`.card`** — стилизация отдельной карточки (тень, скругление, анимация при наведении).
- **`.btn`** — общие стили кнопок; `.btn-primary` (основная), `.btn-outline` (контурная).
- **`.features`** — список с кастомными маркерами (синие кружки с галочкой).

------

### Рекомендации по улучшению

**Исправить ошибки в `<head>`:**

```html
<meta charset="UTF-8">
<link rel="stylesheet" href="styles.css">
```

**Добавить семантические атрибуты для доступности:**

- Для кнопки бургера: `<button class="burger-menu" aria-label="Открыть меню">☰</button>`.
- Для ссылок в футере: `aria-current="page"` на текущей странице.

**Оптимизировать якоря:**

- Убедиться, что идентификаторы (`id="courses"`, `id="about"`) соответствуют реальным разделам на странице.
- Добавить плавный скролл к якорям через CSS или JS.

**Проверить адаптивность:**

- На экранах < 480 px убедиться, что карточки курсов корректно переносятся в столбик.
- Проверить отображение кнопки бургера и вертикального меню.

**Добавить фавикон:**

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

**Улучшить SEO:**

- Добавить мета‑описание (`<meta name="description" content="...">`).
- Использовать заголовки `<h1>`–`<h6>` строго по иерархии.

**Обеспечить контрастность цветов:**

- Проверить соотношение контраста текста и фона (особенно в `.hero` и `.footer`).

------

### Итог

Код соответствует современным стандартам HTML5, имеет чёткую семантическую  структуру и адаптивный дизайн. После исправления мелких ошибок и  добавления доступности страница будет готова к развёртыванию.



---

### 2. `styles.css`

```css
/* Общие настройки */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Шапка */
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2563eb;
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #2563eb;
}

.burger-menu {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

/* Главный экран */
.hero {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    text-align: center;
    padding: 6rem 0;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.hero h1,
.hero .subtitle {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 700px;
    margin: 0 auto 2rem;
}

/* Кнопки — общие стили */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    text-align: center;
    border: 2px solid transparent;
}

/* Кнопка для главного экрана */
.btn-primary {
    background-color: white;
    color: #2563eb;
    border-color: white;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.btn-primary:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Контурная кнопка (для карточек курсов) */
.btn-outline {
    border-color: #2563eb;
    color: #2563eb;
    background-color: transparent;
}

.btn-outline:hover {
    background-color: #2563eb;
    color: white;
    border-color: #2563eb;
}

/* Стили карточек курсов */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card h3 {
    margin-bottom: 1rem;
    color: #1e40af;
    font-size: 1.25rem;
}

.card p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

/* Курсы */
.courses {
    padding: 4rem 0;
}

.courses h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

/* О нас */
.about {
    padding: 4rem 0;
    background-color: #eef2ff;
}

.about h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.features {
    max-width: 800px;
    margin: 0 auto;
    list-style: none;
}

.features li {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: #4b5563;
}

.features li::before {
    content: "✓";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    background-color: #2563eb;
    color: white;
    border-radius: 50%;
    margin-right: 1rem;
    font-weight: bold;
}

/* Подвал */
.footer {
    background-color: #1f2937;
    color: white;
    padding: 3rem 0;
}

.footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.footer p {
    margin-bottom: 1.5rem;
    opacity: 0.8;
}

.footer-nav {
    display: flex;
    gap: 1.5rem;
}

.footer-nav a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.footer-nav a:hover {
    opacity: 1;
}

/* Адаптивность */
@media (max-width: 768px) {
    .header .container {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }

    .burger-menu {
        display: block;
        position: absolute;
        right: 15px;
        top: 15px;
    }

    .hero {
        padding: 4rem 0;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .courses,
    .about {
        padding: 3rem 0;
    }

    .courses h2,
    .about h2 {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .container {
        width: 100%;
        padding: 0 10px;
    }

    .hero {
        padding: 3rem 0;
    }

    .hero h1 {
        font-size: 1.8rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .btn {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}
```

---



Приведённый CSS‑код представляет собой **базовую стилизацию веб‑страницы** с адаптивным дизайном. Разберём ключевые блоки и их назначение.

### 1. Общие настройки (`*`, `body`, `.container`)

- **`\*`** — сброс отступов (`margin`, `padding`) и установка `box-sizing: border-box` для всех элементов.
- **`body`** — базовые стили текста (шрифт, цвет, межстрочный интервал), фоновый цвет.
- **`.container`** — центрирование контента, ограничение максимальной ширины (1200 px), отступы по бокам.

### 2. Шапка (`header`, `.logo`, `.nav`)

- **`.header`** — белая фоновая панель с тенью, «липкое» позиционирование (`sticky`).
- **`.logo`** — стилизованная ссылка-логотип (синий цвет, жирный шрифт).
- **`.nav`** — горизонтальное меню с отступами между пунктами.
- **`.nav-link`** — ссылки меню (серый цвет, плавная смена цвета при наведении).
- **`.burger-menu`** — скрытая кнопка для мобильного меню (появляется на узких экранах).

### 3. Главный экран (`hero`)

- **`.hero`** — градиентный фон, белый текст, центрирование, внутренние отступы.
- **`.hero::before`** — декоративный радиальный градиент поверх фона.
- **`.hero h1`, `.subtitle`** — заголовки с тенью, разные размеры шрифта.

### 4. Кнопки (`btn`, `.btn-primary`, `.btn-outline`)

- **`.btn`** — общие стили кнопки (отступы, скругление, переход).
- **`.btn-primary`** — белая кнопка с синим текстом (основной акцент).
- **`.btn-outline`** — контурная кнопка с синим бордером (вторичное действие).

### 5. Карточки курсов (`cards`, `.card`)

- **`.cards`** — сетка с автоматическим переносом элементов (минимум 300 px на карточку).
- **`.card`** — белая карточка с тенью, скруглением, отступами; анимация при наведении (подъём + усиление тени).
- **`.card h3`, `.card p`** — стили заголовков и текста внутри карточки.

### 6. Разделы «Курсы» и «О нас» (`courses`, `.about`)

- **`.courses`, `.about`** — отступы сверху/снизу, заголовок по центру.
- **`.features`** — список с кастомными маркерами (синие кружки с галочкой).

### 7. Подвал (`footer`)

- **`.footer`** — тёмный фон, белый текст, отступы.
- **`.footer-nav`** — горизонтальное меню ссылок с прозрачностью и переходом при наведении.

### 8. Адаптивность (`@media`)

- **До 768 px**:
  - Шапка становится вертикальной.
  - Меню разворачивается в столбик.
  - Появляется кнопка-бургер.
  - Отступы и размеры шрифтов уменьшаются.
- **До 480 px**:
  - Контейнер занимает 100% ширины.
  - Ещё больше уменьшаются отступы и шрифты.
  - Кнопки становятся компактнее.

### Итоги

Код обеспечивает:

- **Кроссбраузерность** (сброс стилей, `box-sizing`).
- **Адаптивность** (сетка, медиазапросы).
- **Доступность** (контрастные цвета, чёткая иерархия заголовков).
- **Интерактивность** (анимации при наведении, «липкая» шапка).
- **Современный дизайн** (тени, градиенты, скругления).

---



Чтобы бургер‑меню заработало, нужны три компонента:

1. **HTML** — правильная разметка с чекбоксом и меткой;
2. **CSS** — стили для иконки и переключения меню;
3. **JavaScript** — логика открытия/закрытия меню при клике.

Добавте ниже — свой рабочий код.



---



Источники HTML:

https://otus.ru/journal/osnovy-programmirovaniya-na-html/

https://itcodik.com/article/kak-sozdat-prostoy-veb-sayt-s-html-css-i-javascript-poshagovoe-rukovodstvo

https://clubpixel.ru/veb-razrabotka-dlya-detej/tpost/xpo8x8pm41-razrabotka-veb-saitov-htmlcss-instruktsi

Источники CSS:

https://skyeng.ru/it-industry/it/chto-takoye-html-i-css-obyasneniye-dlya-nachinayuschikh/

https://arenda-server.cloud/blog/kak-stilizovat-jelement-body-sajta-s-pomoshhju-css/

https://sky.pro/wiki/html/osnovy-html-i-css-dlya-sozdaniya-sajta-s-nulya/