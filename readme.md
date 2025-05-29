# 🧮 Calculadora Web con Asistencia de IA (GitHub Copilot)

Este es un mini-proyecto de una **calculadora web** desarrollada con **HTML, CSS y JavaScript**, asistida por **GitHub Copilot** y mejorada mediante **análisis estático con ESLint**.

---

## 📑 Tabla de contenido

1. [🎯 Objetivo](#-objetivo)
2. [🚀 Tecnologías utilizadas](#-tecnologías-utilizadas)
3. [🛠️ Funcionalidades](#️-funcionalidades)
4. [🤖 Rol de GitHub Copilot](#-rol-de-github-copilot)
5. [🧪 Análisis Estático con ESLint](#-análisis-estático-con-eslint)

---

## 🎯 Objetivo

- Utilizar inteligencia artificial (GitHub Copilot) como herramienta de asistencia en el desarrollo de software.
- Comparar código generado manualmente con el sugerido por IA.
- Aplicar análisis estático para detectar errores y mejorar la calidad del código.
- Construir un proyecto funcional e intuitivo: una calculadora.

---

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Git y GitHub
- GitHub Copilot
- ESLint (análisis estático)

---

## 🛠️ Funcionalidades

- Calculadora web con interfaz básica.
- Operaciones: suma, resta, multiplicación y división.
- Botón de limpiar (`C`) y botón de igual (`=`).
- Validación de expresiones para evitar errores o código malicioso.
- Mejora de código con reglas de estilo y seguridad.

---

## 🤖 Rol de GitHub Copilot

GitHub Copilot fue usado para:

- Generar la estructura HTML/CSS inicial.
- Sugerir funciones de cálculo y eventos de botones.
- Refactorizar funciones grandes en módulos más pequeños.
- Nombrar variables y agregar comentarios significativos.

---

## 🧪 Análisis Estático con ESLint

Se usó **ESLint** para analizar y mejorar el código JavaScript.

### Configuración básica `.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "eqeqeq": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
