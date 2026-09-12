FROM node:24-bookworm

#En rad för att undvika stor bild pga cache layers
RUN apt-get update && apt get upgrade && apt-get install -y curl ca-certificates && rm -rf /var/lib/apt/lists

User node