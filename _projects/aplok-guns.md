---
layout: project
status: public
type: bedrock
highlight: true
slug: aplok-guns
title: Aplok Guns Addon | v1.1.8
banner: /projects/aplok-guns/images/banner.png
icon: /projects/aplok-guns/images/icon.png
description: >
  A survival-friendly, military-themed add-on featuring vanilla-style weapons, immersive sound effects, polished animations, explosives, custom armor, and blocks—all crafted with meticulous attention to detail.
date: 2022-03-23
updated: 2025-12-07
tags: ["aplok-guns", "weapons", "military", "war", "minecraft", "addon"]
versions: ["1.21.80", "1.21.+", "1.21.124"]
lootlabs:
  - title: Behavior Pack
    link: "https://lootdest.org/s?ebQedyE2"
  - title: Resource Pack
    link: "https://loot-link.com/s?ivXHr6tM"
bstlar:
  - title: Behavior Pack
    link: "https://bstlar.com/2EI/ag-bp-188"
  - title: Resource Pack
    link: "https://bstlar.com/2EI/ag-rp-188"
linkvertise:
  - title: Behavior Pack
    link: "https://link-hub.net/173623/aplok-guns-bp"
  - title: Resource Pack
    link: "https://link-center.net/173623/aplok-guns-rp"
---

![Logo](/projects/{{ page.slug }}/images/screenshot/logo.png)

Looking for a simple and high-quality, military-themed add-on with outstanding features? Aplok Guns delivers exactly that for Minecraft Bedrock. This add-on introduces vanilla-style military content with models designed to seamlessly blend with Minecraft's aesthetic, providing an authentic and immersive combat experience.

## Developer

- [Gabriel Aplok]({{ "/about" | absolute_url }}) **(Lead Developer)**

## Features

- Vanilla-style weapon models and textures
- High-fidelity spatial audio with reverb and distance effects
- Simple and optimized reload and firing animations
- Performance-optimized particle effects
- Innovative attachment and modification system
- Fully craftable items for survival gameplay
- Custom workbench and crafting mechanics
- Low resource usage for compatibility with all devices

## Crafting Guns

Create your own firearms using the **Gun Workbench** and the required materials. Recipes are available in the recipe book on the sidebar.

<div class="row">
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/gun_workbench_0.png" alt="Gun Workbench Preview" />
  </div>
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/gun_workbench_1.png" alt="Gun Workbench Guide" />
  </div>
</div>

## Crafting Ammunition

Use the **Ammo Workbench** to craft magazines. You'll need **Gunmetal Ingots** and **Gunpowder** to produce two magazines.

<div class="row">
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/ammo_0.png" alt="Ammo Workbench Block" />
  </div>
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/ammo_1.png" alt="Ammo Workbench UI" />
  </div>
</div>

## Using Attachments

To equip attachments, interact with the **Attachment Workbench** while holding the gun you wish to modify. Ensure you have the necessary attachment blueprints in your inventory to customize your weapon.

<div class="row">
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/attachments_0.png" alt="Attachments Workbench Block" />
  </div>
  <div class="col-md">
    <img src="/projects/aplok-guns/images/screenshot/attachments_1.png" alt="Attachments Workbench UI" />
  </div>
</div>

## Reloading

Reload empty firearms by having a magazine in your inventory and pressing the interact button (right-click), or by sneaking and attacking (sneak + left-click).

## Crafting Gunmetal

Use the crafting table to create **Gunmetal Scrap**. Combine **Gunmetal Scrap** to craft **Gunmetal Ingots**.

![Gunmetal Scrap Recipes](/projects/{{ page.slug }}/images/screenshot/crafting_gunmetal_0.png)

Use **Gunmetal Ingots** to craft gun parts and attachments.

![Gunmetal Ingot Recipes](/projects/{{ page.slug }}/images/screenshot/crafting_gunmetal_1.png)

## Weapons

<div class="row row-cols-2">
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_0.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_1.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_2.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_3.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_4.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_5.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_6.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_7.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_8.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_9.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_10.png" alt="Gun Screenshot" />
  </div>
  <div class="col-6">
    <img src="/projects/aplok-guns/images/screenshot/guns_11.png" alt="Gun Screenshot" />
  </div>
</div>

## Armor

![Armor Screenshot](/projects/{{ page.slug }}/images/screenshot/armor_0.png)

## Blocks

![Blocks Screenshot](/projects/{{ page.slug }}/images/screenshot/blocks_0.png)

## Installation

<div class="alert alert-warning" role="alert">
  {{ site.label_attention_install_addon }}
</div>

---

## Changelog for v1.1.8

> You can access previous changelogs [here](changes).

```markdown
- Rewrote the entire gun rendering system, now using attachables. Replacing player-entity-based rendering with true 3D items.
- Rewrote the entire gun firing system to be time-based (like in Project Walker), eliminating FPS-dependent fire rates and animation-based delays (in development).
- Added new guns AK-74, AKM, AKs-74u, M1014, ParaFAL.
- Added new 6B13 assault armor and BNTI Gzhel-K body armor.
- Added ACOG Sight.
- Added Predator V4 Red Dot to pistols.
- Added support for sights attachments on the LMG M249.
- Added item groups to attachments and ammunition types.
- Added attachments items back.
- Added gunmental block.
- Added item descriptions to attachments and guns.
- Added 3d grenades rendering in first person.
- Fixed nametag subpack not working.
- Fixed spotlight block pivot in y-position.
- Fixed Juggernaut overlay hiding first-person things.
- Fixed wall detection and leaning not working correctly with the Mossberg.
- Reduced bullet impact particles for better performance and visibility.
- Reduced smoke grenade opacity to better support stealth-based gameplay.
- Reduced sneaking damage bonus from 1.5 to 1.25.
- Reduced silencer damage penalty from -2 to -1.
- Reduced 50.0% of M249 power.
- Improved attachment system, instead of using the blueprint, you will use the necessary attachment ​​item.
- Reverted to Minecraft's default model rendering to fully support slim, default, and Marketplace skins. (Note: Item pivot misalignment is a known issue when using Marketplace skins.)
- Removed experimental leaning system, the early-stage, out-of-date leaning mechanic has been permanently removed as it was dysfunctional and did not meet core feature standards.
```

<div class="alert alert-warning" role="alert">
  {{ site.label_attention_links }}
</div>
