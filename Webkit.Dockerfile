FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install webkit

EXPOSE 3041

CMD ["node", "servers/webkit-server.js"]

