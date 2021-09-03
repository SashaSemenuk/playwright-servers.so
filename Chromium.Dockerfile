FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright-servers install chromium

EXPOSE 3002

CMD ["node", "servers/chromium-server.ts"]