# <% if (scope) { %>@<%= scope%>/<% } %><%= name%>[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> <%= description%>

## Installation

```bash
npm install <% if (scope) { %>@<%= scope%>/<% } %><%= name%>
```

## Publishing
Compile then publish
```bash
tsc
npm publish
```
