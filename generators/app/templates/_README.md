# <% if (scope) { %>@<%= scope%>/<% } %><%= name%>
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
