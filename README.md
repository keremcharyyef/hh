# hh - Service for Wildberries Tariffs Integration

## Описание

Это MVP-сервис для интеграции с маркетплейсом Wildberries. Сервис автоматически обновляет тарифы коробов и накапливает их в базе данных PostgreSQL. Также, сервис регулярно выгружает данные в Google Sheets для дальнейшего анализа и работы.

## Структура

1. **PostgreSQL** - используется для хранения данных о тарифах.
2. **Google Sheets API** - для выгрузки данных в таблицы.
3. **Node.js** с TypeScript - для реализации логики сервиса.

## Установка

### 1. Клонирование репозитория

```bash
git clone https://github.com/keremcharyyef/hh.git
cd hh
npm start

Установка зависимостей
    npm install
    
    docker-compose up --build

    Технологии
Node.js + TypeScript
PostgreSQL (с использованием Knex.js)
Google Sheets API (для выгрузки данных)
Docker для контейнеризации
