FROM node:18 AS builder

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm i --registry=https://registry.npmjs.org/

COPY . .

RUN pnpm build

FROM nginx:alpine

RUN apk --no-cache add gettext

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

COPY --from=builder /app/dist /usr/share/nginx/html

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]