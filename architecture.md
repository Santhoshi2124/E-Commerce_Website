# 🏗️ System Architecture — ShopSmart E-Commerce Web App

This document explains the **architecture and component interaction** of the ShopSmart E-Commerce Website built using **React.js**, **Tailwind CSS**, and **LocalStorage**.  
It also shows the extendable flow for integrating a **Node.js + MongoDB backend** in the future.

---

## 🌐 Architecture Flow Diagram

```mermaid
flowchart TD

%% ======== FRONTEND LAYER ========
A[React Frontend] --> B[Tailwind CSS Styling]
A --> C[Context API - State Management]
A --> D[Cart and Product Components]

%% ======== DATA LAYER ========
D --> E[Local Storage]
C --> E

%% ======== FUTURE EXTENSION ========
E --> F[Node.js and Express API]
F --> G[MongoDB Atlas Database]

%% ======== USERS ========
U[User via Browser] -->|Interacts with| A

%% ======== GROUPS ========
subgraph Frontend
A
B
C
D
end

subgraph Data_Layer
E
end

subgraph Backend_Future
F
G
end
