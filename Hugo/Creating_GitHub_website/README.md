# Создание сайта  GitHub Pages 

Вы можете создать сайт GitHub Pages в новом или существующем репозитории. 

## Кто может использовать эту функцию? 



GitHub Pages доступен в общедоступных репозиториях с платными  версиями GitHub Free и GitHub Free for organizations, а также в  общедоступных и частных репозиториях с платными версиями GitHub Pro,  GitHub Team, GitHub Enterprise Cloud и GitHub Enterprise Server. Для  получения дополнительной информации см. [ тарифные планы GitHub ](https://docs.github.com/en/get-started/learning-about-github/githubs-plans) . 

## В этой статье 















## [Создание репозитория для вашего сайта ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site)

Вы можете либо создать репозиторий, либо выбрать существующий репозиторий для своего сайта. 

Если вы хотите создать сайт GitHub Pages для репозитория, не все  файлы которого связаны с сайтом, вы сможете настроить источник  публикации для вашего сайта. Например, вы можете создать отдельную ветку и папку для хранения исходных файлов вашего сайта или использовать  пользовательский рабочий процесс GitHub Actions для сборки и  развертывания исходных файлов вашего сайта. 

Если учетная запись, владеющая репозиторием, использует GitHub Free  или GitHub Free для организаций, репозиторий должен быть общедоступным. 

Если вы хотите создать сайт в существующем репозитории, перейдите к [ разделу «Создание сайта» ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) . 

1. В правом верхнем углу любой страницы выберите 

1. Затем нажмите  **«Создать репозиторий»**  . 

   

   ![Скриншот выпадающего меню GitHub с вариантами создания новых элементов. Пункт меню «Новый репозиторий» выделен темно-оранжевой рамкой.](https://docs.github.com/assets/cb-29762/images/help/repository/repo-create-global-nav-update.png)

   

2. Используйте  **выпадающее меню «Владелец»**  , чтобы выбрать учетную запись, которой вы хотите доверить репозиторий. 

   ![Скриншот меню владельца нового репозитория GitHub. В меню отображаются два варианта: Octocat и GitHub.](https://docs.github.com/assets/cb-80933/images/help/repository/create-repository-owner.png)

   

3. Укажите название для вашего репозитория и, при необходимости,  описание. Если вы создаете сайт для пользователей или организаций, ваш  репозиторий должен быть назван. `<user>.github.io` или `<organization>.github.io`Если в имени пользователя или организации присутствуют заглавные буквы, их необходимо перевести в нижний регистр. Для получения более подробной информации см. раздел [ «Что такое GitHub Pages?» ](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites) . 

   ![Скриншот настроек GitHub Pages в репозитории. Поле «Название репозитория» содержит текст «octocat.github.io» и выделено темно-оранжевой рамкой.](https://docs.github.com/assets/cb-48480/images/help/pages/create-repository-name-pages.png)

   

4. Выберите уровень видимости репозитория. Дополнительную информацию см. [ в разделе «О репозиториях» ](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) . 

5. Включите  **README»**  параметр  **« Добавить**  . 

6. Нажмите  **«Создать репозиторий»**  . 

## [Создание вашего сайта ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)

Прежде чем создавать свой сайт, у вас должен быть репозиторий для  вашего сайта на GitHub. Если вы создаете свой сайт не в существующем  репозитории, см. раздел « [ Создание репозитория для вашего сайта» ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site) . 



Предупреждение 

Сайты GitHub Pages общедоступны в интернете, даже если репозиторий сайта является частным (если ваш тарифный план или организация это  позволяют). Если в репозитории вашего сайта содержатся конфиденциальные  данные, возможно, вам следует удалить их перед публикацией. Для  получения дополнительной информации см. раздел [ «О репозиториях» ](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) . 

1. На GitHub перейдите в репозиторий вашего сайта. 

2. Выберите источник публикации, который вы хотите использовать. См. раздел « [ Настройка источника публикации для вашего сайта GitHub Pages» ](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) . 

3. Создайте входной файл для вашего сайта. GitHub Pages будет искать его. `index.html`, `index.md`, или `README.md`Используйте этот файл в качестве входного файла для вашего сайта. 

   Если источником публикации является ветка и папка, то входной файл  должен находиться на верхнем уровне исходной папки в исходной ветке.  Например, если источником публикации является... `/docs`папка на `main`Ветвь, ваш входной файл должен находиться в `/docs`папка в ветке под названием `main`. 

   Если источником публикации является рабочий процесс GitHub Actions,  то развертываемый артефакт должен содержать входной файл на верхнем  уровне. Вместо добавления входного файла в репозиторий вы можете  настроить GitHub Actions на генерацию входного файла при запуске  рабочего процесса. 

4. Настройте источник публикации. См. раздел [ «Настройка источника публикации для вашего сайта GitHub Pages» ](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) . 

5. Ваш сайт GitHub Pages создан и развернут с помощью рабочего процесса  GitHub Actions. Для получения дополнительной информации см. раздел « [ Просмотр истории выполнения рабочих процессов» ](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) . 

   

1. Примечание. 

   GitHub Actions бесплатен для публичных репозиториев. За использование  частных и внутренних репозиториев, превышающее ежемесячный лимит  бесплатных минут, взимается плата. Для получения дополнительной  информации см. раздел [ «Биллинг и использование» ](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration) . 

## [Просмотр вашего опубликованного сайта ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#viewing-your-published-site)

1. Под названием вашего репозитория нажмите 

**Настройки**  . Если вы не видите вкладку «Настройки», выберите... 

В выпадающем меню выберите  **«Настройки»**  . 



![Скриншот заголовка репозитория с отображением вкладок. Вкладка «Настройки» выделена темно-оранжевой рамкой.](https://docs.github.com/assets/cb-28260/images/help/repository/repo-actions-settings.png)



В разделе «Код и автоматизация» боковой панели нажмите 

**Страницы**  . 

Чтобы увидеть свой опубликованный сайт, в разделе "GitHub Pages" нажмите 

1. **Посетите сайт**  . 



Примечание. 

После отправки изменений в GitHub на сайт может потребоваться до 10  минут для их публикации. Если через час изменения на вашем сайте GitHub  Pages не отображаются в браузере, см. раздел « [ Об ошибках сборки Jekyll для сайтов GitHub Pages» ](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites) . 

- Если вы публикуете контент из ветки, и ваш сайт не был опубликован  автоматически, убедитесь, что кто-то с правами администратора и  подтвержденным адресом электронной почты отправил изменения в исходный  код публикации. 
- Коммиты, отправленные с помощью рабочего процесса GitHub Actions, который использует `GITHUB_TOKEN`Не запускайте сборку GitHub Pages. 

## [Генераторы статических сайтов ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators)

GitHub Pages публикует все статические файлы, которые вы загружаете в свой репозиторий. Вы можете создавать собственные статические файлы или использовать генератор статических сайтов для сборки вашего сайта. Вы  также можете настроить собственный процесс сборки локально или на другом сервере. 

Если вы используете собственный процесс сборки или генератор  статических сайтов, отличный от Jekyll, вы можете написать рабочий  процесс GitHub Actions для сборки и публикации вашего сайта. GitHub  предоставляет шаблоны рабочих процессов для нескольких генераторов  статических сайтов. Для получения дополнительной информации см. раздел « [ Настройка источника публикации для вашего сайта GitHub Pages» ](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) . 

Если вы публикуете свой сайт из исходной ветки, GitHub Pages по  умолчанию будет использовать Jekyll для сборки вашего сайта. Если вы  хотите использовать генератор статических сайтов, отличный от Jekyll, мы рекомендуем вам создать GitHub Actions для сборки и публикации вашего  сайта. В противном случае отключите процесс сборки Jekyll, создав пустой файл с именем `.nojekyll`в корневом каталоге вашего  издательского ресурса, затем следуйте инструкциям вашего генератора  статических сайтов, чтобы собрать сайт локально. 



Примечание. 

GitHub Pages не поддерживает серверные языки программирования, такие как PHP, Ruby или Python. 

## [MIME-типы на GitHub Pages ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#mime-types-on-github-pages)

MIME-тип — это заголовок, который сервер отправляет в браузер,  предоставляя информацию о характере и формате запрошенных браузером  файлов. GitHub Pages поддерживает более 750 MIME-типов для тысяч  расширений файлов. Список поддерживаемых MIME-типов генерируется  проектом [ mime-db ](https://github.com/jshttp/mime-db) . 

Хотя вы не можете указывать пользовательские MIME-типы для каждого  файла или репозитория, вы можете добавлять или изменять MIME-типы для  использования на GitHub Pages. Для получения дополнительной информации  см. [ руководство по участию в проекте mime-db ](https://github.com/jshttp/mime-db#adding-custom-media-types) . 

## [Следующие шаги ](https://docs.github.com/ru/pages/getting-started-with-github-pages/creating-a-github-pages-site#next-steps)

Вы можете добавить больше страниц на свой сайт, создав новые файлы.  Каждый файл будет доступен на вашем сайте в той же структуре каталогов,  что и источник публикации. Например, если источником публикации для  сайта вашего проекта является... `gh-pages`ветка, и вы создаете новый файл с именем `/about/contact-us.md`на `gh-pages`В этой ветке файл будет доступен по адресу: `https://<user>.github.io/<repository>/about/contact-us.html`. 

Вы также можете добавить тему оформления, чтобы настроить внешний вид своего сайта. Для получения дополнительной информации см. раздел « [ Добавление темы оформления на ваш сайт GitHub Pages с помощью Jekyll» ](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) . 
