FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright-servers install firefox

EXPOSE 3000

CMD ["node", "servers/firefox-server.ts"]
