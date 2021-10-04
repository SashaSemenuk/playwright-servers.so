FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install firefox

EXPOSE 3030

CMD ["node", "servers/firefox-server.js"]

