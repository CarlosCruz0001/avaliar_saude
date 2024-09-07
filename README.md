# Projeto Avaliação de Saúde

Este projeto é um aplicativo React Native para avaliação de saúde, incluindo cálculo de IMC e ICQ. O aplicativo possui navegação entre telas e animações personalizadas para uma experiência de usuário mais fluida e interativa.

## Funcionalidades

- **HomePage**: Tela inicial com opções para calcular ICQ e IMC.
- **ICQPage**: Tela para calcular o Índice de Cintura-Quadril (ICQ).
- **IMCPage**: Tela para calcular o Índice de Massa Corporal (IMC).
- **Animações**: Animações suaves e interativas durante a navegação entre telas, incluindo estrelas brilhantes como fundo.

## Instalação

 **Clone o repositório:**

   ``
   git clone <URL-DO-REPOSITORIO>
   ``
**Navegue até o diretório do projeto:**
``
cd <NOME-DO-PROJETO>
``
**Instale as dependências:**
``
npm install
``
**Instale as dependências do Expo e outras bibliotecas necessárias:**
``
npx expo install react-native-reanimated react-native-gesture-handler
``
**Inicie o projeto:**

``
npm start
``
## Uso
- **HomePage:** A tela inicial oferece dois botões para navegar para as páginas de cálculo de ICQ e IMC.
- **ICQPage:** Informe os valores de cintura e quadril para calcular o Índice de Cintura-Quadril (ICQ).
- **IMCPage:** Informe o peso e altura para calcular o Índice de Massa Corporal (IMC).

## Navegação
A navegação entre telas é realizada utilizando o createStackNavigator do React Navigation. As transições entre as telas foram configuradas para serem suaves e incluem animações personalizadas.

## Estilização
- **Botões:** Botões estilizados com sombras e cores personalizadas para melhorar a aparência.
- **Estrelas Brilhantes:** Animações de estrelas brilhantes são usadas no fundo para uma experiência visual agradável.

## Dependências
``react-native:`` Framework principal para desenvolvimento móvel.
``react-navigation:`` Biblioteca para navegação entre telas.
``react-native-reanimated:`` Biblioteca para animações personalizadas.
``react-native-gesture-handler:`` Biblioteca para manipulação de gestos.
