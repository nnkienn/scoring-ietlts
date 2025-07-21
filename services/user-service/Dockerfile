FROM node:18-alpine
WORKDIR /app
# Chỉ copy package để npm ci
COPY package*.json ./
RUN npm ci
# Copy toàn bộ source (dùng cho build prod)
COPY . .
RUN npm run build
EXPOSE 3000
# Defaut command (prod): node dist/main.js
CMD ["node", "dist/main.js"]