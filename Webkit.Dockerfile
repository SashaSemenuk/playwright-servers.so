FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright-servers install webkit

EXPOSE 3001

CMD ["node", "servers/webkit-server.ts"]

