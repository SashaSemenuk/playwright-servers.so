FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY .. .

RUN npm install

RUN npx playwright install chromium

EXPOSE 3002

CMD ["node", "servers/chromium-server.js"]