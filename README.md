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
docker run -it --rm -p 3000:3000 playwright_server_firefox
````

###Webkit Server
````
docker run -it --rm -p 3030:3030 playwright_server_webkit
````

###Chromium Server
````
docker run -it --rm -p 3002:3002 playwright_server_chromium
````