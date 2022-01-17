--sumario--
**Requisitos Funcionais (RF)**
**Requisitos Não Funcionais (RNF)**
**Regras de Negócio (RN)**



# Cadastro de Carro

**RF**
- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

**RN**
- Não deve ser possível cadastrar um carro com uma placa já cadastrada.
- Não deve ser possível alterar a placa de um carro cadastrado.
- O carro deve ser cadastrado como disponível por padrão.
- O usuário responsável pelo cadastro deve ter permissão administrador.
# Listagem de Carros

**RF**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
- O usuário não precisa estar logado no sistema

# cadastro de especificação no carro

**RF**
- deve ser possível cadastrar uma especificação para um carro
- deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros
- O usuário responsável pelo cadastro deve ter permissão administrador.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para um mesmo carro


# Cadastro de Imagens do Carro
**RF**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar masi de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de Carro
**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo carro





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


  https://newbedev.com/changing-a-postgres-containers-server-port-in-docker-compose