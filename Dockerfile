FROM nginx:alpine

# Patch CVEs (like CVE-2026-3805) and update system packages
RUN apk update && apk upgrade --no-cache

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY index.html robots.txt sitemap.xml ./

COPY assets/ ./assets/

EXPOSE 80
