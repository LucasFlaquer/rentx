## Comandos DOCKER para rodar


```bash

  docker build -t rentx .

  docker run -p 3333:3333 rentx
```


### docker ps
  para ver todos os containers que estão rodando disponíveis para serem utilizados

### docker ps -a
  ve containers parardos, ativos etc

### docker rm [ID DO CONTAINER DESEJADO]
 remove o container. para remover primeiro precisa parar o mesmo


### docker start [ID DO CONTAINER]
  inicia

### docker stop
  para container

### docker-compose stop
  para o container com os serviços

### docker-compose down
  remover tudo que foi criado

### docker-compose start
  inicia o docker compose