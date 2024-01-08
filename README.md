
## Установка

1. **Клонирование репозитория:**

    ```bash
    git clone https://github.com/blkssmv/unsplash.git
    ```

2. **Перейдите в каталог проекта:**

    ```bash
    cd unsplash
    ```

3. **Убедитесь, что у вас есть файл `.env` с переменными окружения:**

    В вашем файле `.env` должен быть определен ключ доступа Unsplash, например:

    ```dotenv
    REACT_APP_UNSPLASH_ACCESS_KEY=ваш_ключ_Unsplash
    REACT_APP_UNSPLASH_API="https://api.unsplash.com"
    ```

    Обратите внимание, что вы должны заменить `ваш_ключ_Unsplash` на свой реальный ключ доступа к API Unsplash. В моем случае этот ключ "uiJYSyirQVQhGRoJ5zK5mjUFjalx0Ut2t1XUQ_Imf44", можете этот ключ поставить для проверки

4. **Установите зависимости:**

    ```bash
    npm install
    ```

## Запуск проекта

**Запустите локальный сервер разработки:**

    ```bash
    npm start
    ```

    После этого проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).



## Заметки

- В случае необходимости вы можете изменить переменные окружения в файле `.env`.

