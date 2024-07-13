Controlled -> manter, em tempo real, a informação que o usuário insere dentro do estado (variável do componente).

Uncontrolled -> busca um valor de um input somente quando precisarmos dela.

Prop Drilling -> quando temos muitas propriedades apenas para comunicação entre componentes.

Context API -> permite compartilharmos informações entre vários componentes ao mesmo tempo.
  - Quando cria um contexto e compartilha uma informação inicial com vários, você não pode modificar essas infomrações.
  - Para alterar uma informação, a variável precisa ser um estado.