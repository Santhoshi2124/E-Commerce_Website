# 🏗️ System Architecture — ShopSmart E-Commerce Web App

This document explains the **architecture and component interaction** of the ShopSmart E-Commerce Website built using **React.js**, **Tailwind CSS**, and **LocalStorage**.  
It also shows the extendable flow for integrating a **Node.js + MongoDB backend** in the future.

---

## 🌐 Architecture Flow Diagram

```mermaid
flowchart TD

%% ======== FRONTEND LAYER ========
A[React.js Frontend] --> B[Tailwind CSS Styling]
A --> C[Context API (State Management)]
A --> D[Cart & Product Components]

%% ======== DATA LAYER ========
D --> E[LocalStorage]
C --> E

%% ======== FUTURE EXTENSION ========
E --> F[Node.js + Express API]
F --> G[MongoDB Atlas Database]

%% ======== USERS ========
U[User (Browser)] -->|Interacts via UI| A

%% ======== LABELS ========
subgraph Frontend
A
B
C
D
end

subgraph DataLayer
E
end

subgraph BackendFuture
F
G
end
