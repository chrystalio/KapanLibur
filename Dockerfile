FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY index.html robots.txt sitemap.xml ./

COPY assets ./assets/

EXPOSE 80

CMD ["nginx", "g", "daemon off;"]
