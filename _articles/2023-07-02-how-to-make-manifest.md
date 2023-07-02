---
layout: article
status: draft
title: How to Make a Manifest
banner: https://learn.microsoft.com/en-us/minecraft/creator/documents/media/behaviorpack/introduction-to-behavior-packs.jpg
author: Gabriel Lima
tags: [minecraft, modding]
date: 2023-07-02
---

The manifest file contains all the basic info about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.

## Properties

| Name           | Description                                                                                                              |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------|
| format_version | The syntax version used in the manifest file. This may be 1 for skin packs or 2 for resource, behavior, and world packs. |
| header         | Section containing information regarding the name of the pack, description, and other features that are public facing.   |
| modules        | Section containing information regarding the type of content that is being brought in.                                   |
| dependencies   | Section containing definitions for any other packs that are required in order for this manifest.json file to work.       |
| capabilities   | Section containing optional features that can be enabled in Minecraft.                                                   |
| metadata       | Section containing the metadata about the file such as authors and licensing information.                                |
