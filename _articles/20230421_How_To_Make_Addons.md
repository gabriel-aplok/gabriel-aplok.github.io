---
layout: article
title: "How to create addons for MCBE"
date: 2023-04-21
author: Gabriel L.
---

Os complementos são o primeiro passo em nossa jornada para trazer níveis ainda maiores de personalização para o Minecraft Bedrock.

Os complementos permitem que os jogadores transformem a aparência de seus mundos e até mudem o comportamento dos mobs. Por exemplo, você pode alterar o raio de explosão de um Creeper e a textura que ele está usando.
![](https://learn.microsoft.com/en-us/minecraft/creator/documents/media/gettingstarted/getting-started.jpg)
Neste tutorial, você aprenderá o seguinte.
- A estrutura de arquivo usada pelos complementos do Minecraft.
- Software usado para editar arquivos JSON.
- Extensões disponíveis para ajudar no desenvolvimento de complementos.

### com.mojang
Quando o Minecraft é instalado no seu computador, existe uma pasta chamada **com.mojang** que é gerada na pasta AppData. Você precisará encontrar essa pasta para poder adicionar seu conteúdo a ela.

Para localizar a pasta **com.mojang** em seu computador, você precisará definir a caixa de seleção **Itens ocultos** como **true**, conforme mostrado abaixo. enquanto você está nisso, vá em frente e marque a caixa **Extensões de nome de arquivo** também.

### Mostrando itens ocultos
1. Abra o **File Explorer** na barra de tarefas.
1. Selecione a guia **Exibir**.
1. Na seção **Mostrar/ocultar**, marque as caixas de seleção **Extensões de nome de arquivo** e **Itens ocultos**.
![](https://learn.microsoft.com/en-us/minecraft/creator/documents/media/gettingstarted/viewhiddenfolders.png)

### Localizando com.mojang
1. Pressione **Win+R** para abrir **Executar**.
1. Copie e cole o seguinte no campo **Abrir** :```%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang```
1. Clique em ***OK***.

```
Agora seria um bom momento para salvar um atalho para esta pasta em sua área de trabalho.
```

Conforme mostrado na imagem abaixo, existem vários subdiretórios localizados na pasta **com.mojang**.
