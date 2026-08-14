---
title: "Infraestructura de Red y Seguridad"
description: "Diseño e implementación de arquitectura de red LAN de alta disponibilidad con segmentación VLAN y gestión Omada SDN para el H. Ayuntamiento de Tekax."
image: "/images/Plano2.png"
tags: ["Redes LAN", "VLANs", "Omada SDN", "Seguridad Perimetral", "Cat6"]
order: 5
---

# Propuesta de Red Corporativa - H. Ayuntamiento de Tekax

Proyecto de ingeniería para el diseño e implementación de una infraestructura de red convergente, escalable y segura para el **H. Ayuntamiento de Tekax, Yucatán**, cubriendo tanto las áreas administrativas privadas como el acceso público para la ciudadanía y visitantes.

---

## Problematica a resolver

El Ayuntamiento requería modernizar su infraestructura tecnológica debido a problemas de comunicación interna, baja velocidad y falta de aislamiento entre el tráfico institucional y los visitantes.

El objetivo fue diseñar una arquitectura integral basada en planos arquitectónicos reales, garantizando:
- **Aislamiento total** de datos sensibles institucionales frente a redes de cortesía.
- **Cobertura inalámbrica uniforme** y cableado estructurado de alto rendimiento.
- **Gestión centralizada en la nube** para monitoreo, mantenimiento y políticas de seguridad en tiempo real.

---

##  Arquitectura y Hardware Seleccionado (TP-Link Omada SDN)

Se seleccionó una solución unificada bajo el ecosistema **TP-Link Omada SDN**:

* **Controlador Centralizado:** 1× TP-Link OC200 para aprovisionamiento remoto, monitoreo en tiempo real y gestión de políticas unificadas.
* **Routers / Gateways de Seguridad:** 3× TP-Link ER7206 (Multi-WAN, SPI Firewall, DoS Defense y soporte VPN IPsec).
* **Conmutación (Switches):** 3× TP-Link TL-SG2210MP (Switches administrables Gigabit PoE+ con capacidad de 150W de potencia total).
* **Puntos de Acceso Privados:** 6× TP-Link EAP615-Wall (Wi-Fi 6 de placa de pared para oficinas administrativas y dependencias clave).
* **Puntos de Acceso Públicos:** 6× TP-Link EAP115 con portal cautivo para visitantes y salas de espera.
* **Cableado Estructurado:** ~600 metros de cable UTP Cat6 (hasta 1 Gbps) organizados en rack central con patch panels y canaletas certificadas.

---

##  Implementación y segmentación mediante VLANs & ACLs

Para cumplir con normativas de protección de datos (**LGPDPPSO**) y estándares internacionales, la red se segmentó lógicamente mediante VLANs:

| VLAN | Nombre | Propósito | Rango IP / Subred | Gateway |
| :--- | :--- | :--- | :--- | :--- |
| **VLAN 10-11** | Red Privada | Empleados y personal administrativo | `192.168.10.0/24` | `192.168.10.1` |
| **VLAN 20** | Red Pública | Visitantes y ciudadanos (Portal Cautivo) | `192.168.20.0/24` | `192.168.20.1` |
| **VLAN 30** | Oficinas Sensibles | Presidencia, Tesorería y dependencias críticas | `192.168.30.0/24` | `192.168.30.1` |

### Políticas de Filtrado (ACLs):
- **VLAN 20 (Pública):** Completamente aislada; sin comunicación hacia las VLANs 10, 11 o 30.
- **VLAN 30 (Crítica):** Reglas de firewall unidireccionales que permiten consumir recursos compartidos sin exponerse a la red común.

---

##  Cumplimiento Normativo y Estándares

- **Normas IEEE:** 802.3 (Ethernet) y 802.11ax/ac/n (Wi-Fi).
- **Cableado y Administración:** ANSI/TIA/EIA-568-B y TIA/EIA-606-A para etiquetado, distancias y canalizaciones.
- **Seguridad Eléctrica:** NOM-001-SCFI-2018 para equipos de telecomunicaciones.
