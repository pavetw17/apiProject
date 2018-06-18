# apiProject
## Docker
1. One liner to stop / remove all of Docker containers:

docker stop $(docker ps -a -q)

2. Delete all containers

docker rm $(docker ps -a -q)

3. Delete all images

docker rmi $(docker images -q)

## Detail container ($docker ps)
$ docker ps                     
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
3c0c3a545087        centos              "bin/bash"          19 seconds ago 

## List container
docker ps -a 

## Remove
First, $ docker rm {container_id} </br>
Second, $ docker rmi {image_id}


## Pull
docker pull ubuntu

##  Run
Run Ubuntu: $ docker run -i -t ubuntu /bin/bash


