# Базовый образ с Node.js
FROM node:18-alpine

# Установка зависимостей
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Копирование кода
COPY . .

# Сборка TypeScript (если требуется)
RUN npm run build

# Запуск приложения
CMD ["node", "dist/index.js"]
