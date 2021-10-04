##Before

###Delete cache
````
sudo systemd-resolve --flush-cache

npm i
````

### Build Firefox Server
````
docker build --rm -f Firefox.Dockerfile -t playwright_server_firefox .
````

### Build Webkit Server
````
docker build --rm -f Webkit.Dockerfile -t playwright_server_webkit .
````

### Build Chromium Server
````
docker build --rm -f Chromium.Dockerfile -t playwright_server_chromium .
````


##RUN images

###Firefox Server
````
docker run -it --rm -p 3030:3030 -p 9090:9090 playwright_server_firefox
````

###Webkit Server
````
docker run -it --rm -p 3001:3001 -p 9090:9090 playwright_server_webkit
````

###Chromium Server
````
docker run -it --rm -p 3002:3002 -p 9090:9090 playwright_server_chromium
````