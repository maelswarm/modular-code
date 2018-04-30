# modular-html
Ultra light-weight modular based HTML

## Install

````js
npm install modular-html
````

### root.html

````html
{%header.html%}
{%body.html%}
{%footer.html%}
````

### header.html

````html
<html>
<head>
</head>
````

### body.html

````html
<body>
  <div>
    {%a.html%}
    {%b.html%}
  </div>
</body>
````

### footer.html

````html
</html>
````

### a.html

````html
<span>Hello</span>
````

### b.html

````html
<span>World</span>
````

## Build

````js
  nodejs html-modular ./root.html ./main.html
````

### Result - main.html

````html
<html>
<head>
</head>
<body>
  <div>
    <span>Hello</span>
    <span>World</span>
  </div>
</body>
</html>
````
