# 📏 Calculadora de Bitola de Cabos Elétricos

## Um aplicativo React Native para cálculo da bitola adequada de cabos elétricos de cobre conforme a distância e corrente necessárias.

### 📋 Funcionalidades
✅ Cálculo preciso da bitola para tensões 127V e 220V

✅ Interface simples e intuitiva

✅ Fórmulas técnicas corretas para dimensionamento elétrico

✅ Exibição de resultados com 2 casas decimais

✅ Design responsivo para todos os dispositivos

### ⚙️ Fórmulas Utilizadas
Para cabos de cobre em instalações residenciais:

Para 127V:

```text
bitola = (2 × corrente × distância) / 294.64
```

Para 220V:

```text
bitola = (2 × corrente × distância) / 510.4
```

Onde:

corrente = corrente elétrica em amperes (A)
distância = comprimento do cabo em metros (m)

### 🚀 Como Executar
Clone o repositório

```bash
git clone https://github.com/seu-usuario/calculadora-bitola.git
```

### Instale as dependências

```bash
npm install
```
ou
```bash
yarn install
```

### Execute o aplicativo

```bash
npm start
```
 ou
```bash
yarn start
```

### 📱 Plataformas Suportadas
- Android
- iOS
- Web (via React Native Web)

### 🛠️ Tecnologias Utilizadas
- React Native
- TypeScript
- React Navigation 
- Expo
