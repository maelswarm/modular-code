# modular-code

An incredibly simple way to modularize your code.

## Install

````js
npm install -g modular-html
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
    {%hello.html%}
    {%world.html%}
  </div>
</body>
````

### footer.html

````html
</html>
````

### hello.html

````html
<span>Hello</span>
````

### world.html

````html
<span>World</span>
````

## Build

````js
modular-html ./root.html ./main.html
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
