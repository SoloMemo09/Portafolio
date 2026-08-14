---
title: "PAMRC"
description: "Plataforma Automatizada de Auditoría y Mapeo de Redes Corporativas. Motor de escaneo en Python, API en Node.js, y Dashboard web en Astro."
image: "/images/PAMCR.png"
tags: ["Python", "Node.js", "Astro", "Supabase"]
github: "https://github.com/SoloMemo09/MVP_PAMRC"
order: 2
---

# Resumen 

La **Plataforma Automatizada de Auditoría y Mapeo de Redes Corporativas (PAMRC)** nace para resolver la pérdida progresiva de visibilidad sobre la topología real de segmentación en infraestructuras corporativas de tamaño pequeño y mediano.

El proyecto, concebido como Producto Mínimo Viable (MVP), integra un motor de escaneo activo con persistencia relacional y visualización topológica.

## Logros Destacados

- **Motor de Escaneo (Python):** Descubrimiento de hosts activos mediante técnicas estándar (ICMP/ARP), escaneo de puertos TCP comunes y *banner grabbing* para detección de servicios.
- **API de Transporte (Node.js):** Actúa como intermediaria y guardiana segura. Expone endpoints RESTful para la ingesta, consulta y consumo de los datos, validando y saneando toda la información.
- **Persistencia de Datos (Supabase):** Esquema relacional normalizado (3FN) alojado en PostgreSQL con políticas de seguridad (RLS) para proteger los activos, escaneos y puertos identificados.
- **Dashboard Web (Astro):** Interfaz gráfica responsiva que consume la API para presentar de forma comprensible el inventario de la red y la topología subyacente.

## Stack Tecnológico y Arquitectura

La arquitectura unidireccional desacoplada utiliza 4 capas principales:

1. **Capa 1: Recolección** -> Python (Scapy, Socket)
2. **Capa 2: Transporte** -> Node.js (Express, API Keys)
3. **Capa 3: Persistencia** -> Supabase (PostgreSQL)
4. **Capa 4: Presentación** -> Astro (Tailwind CSS)

> "Una pieza central que demuestra dominio práctico de un stack políglota bajo una arquitectura coherente y rigurosamente documentada."
