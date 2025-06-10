Este projeto é uma API para gerenciamento de tickets de suporte técnico, desenvolvida do zero com Node.js utilizando apenas módulos nativos. A API permite:

Criar novos tickets de suporte

Listar todos os tickets

Filtrar tickets por parâmetros de busca

Atualizar informações dos tickets

Fechar (encerrar) tickets

Excluir tickets definitivamente

Cada ticket contém informações como equipamento, descrição do problema e nome do usuário solicitante. O nome do usuário é fixo e não pode ser editado após a criação do ticket. Os campos de equipamento e descrição podem ser atualizados. Os tickets recebem um ID gerado automaticamente para controle interno.

O foco do projeto está no desenvolvimento do back-end utilizando conceitos como manipulação de rotas, parsing de JSON, middlewares e organização modular do código sem o uso de frameworks externos.
