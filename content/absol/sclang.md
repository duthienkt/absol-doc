# function

## absol.sclang.validateSCCode(sourceCode, opt ):SCCodeValidation

- **sourceCode**: `string`
- **opt**: `{variables:string[]}`

```js
var d = absol.sclang.validateSCCode(`
    var name = nd.name;
    var scope;
    var a;
    a = b;
    var m = {a: a, b: b, d: d};
    if (type === 'get_var') {
    x = y;
        scope = this.topScope.findScope(nd.object);
        if (!scope) {
            this.glolbalScope.declare(name, null, true);
        }
    }
    z = Math.max(x,y, scope[a]);
    return name;`,
    {variables: ['Math', 'Date', 'x','this']});


if (d.error) {
    console.log(d.error);
    var div = document.createElement('div');

    setTimeout(() => {
        document.body.appendChild(div);
        div.innerHTML = d.error.htmlMessage;
    }, 100)
}

```


# Database

Bảng sclang_namespace

| Tên trường   | Kiểu dữ liệu         | Mô tả |
|--------------|----------------------|-------|
| id           | int(auto increase)   |       |
| name         | short text           |       |
| type         |                      | 0: mặc định là namespace chứa hàm, sau này có thể có class...      |
| parent       | int                  | trỏ tới namespace cha |
| created_time  | timestamp            | ngày tạo  |
| modified_time | timestamp           | ngày sửa |
| desc         |  long text            | lưu object mô tả, các trường phụ  |
| ower          | ???                  |   cùng kiểu dữ liệu với user id  |
| permission   | long text            |     Dự phòng chứ chưa biết lưu gì                |


Bảng sclang_node

| Tên trường   | Kiểu dữ liệu         | Mô tả |
|--------------|----------------------|-------|
| id           | int(auto increase)   |       |
| type         | int                  |  1: function, 2....: các loại khác |
| name_space_id | int                 | namespace chứa node |
| content      |  long text           |                     |
| old_contents |                      |                     |
| created_time  | timestamp            | ngày tạo  |
| modified_time | timestamp           | ngày sửa |
| version | int                      | tăng theo số lần sửa, đông thời,dùng để biết có ai đã sửa trong lúc mình đang làm không|
| desc |                             |                    |
| ower          | ???                  |   cùng kiểu dữ liệu với user id  |
| permission   | long text            |     Dự phòng chứ chưa biết lưu gì                |




# AST

## Danh sách class

### Program

- **type**: `"Program"`
- **body**: `Array<Statement>`

### Identifier

- **type**: `"Identifier"`
- **name**: `string`

> Identifier là một node đặc biệt, có thể dùng như biểu thức trong `Expression`, hoặc để tham khảo đến 1 biến, hoặc 1 trường trong object

### TypeAnnotation

- **type**: `"TypeAnnotation"`
- **typeAnnotation**: `Type`


### GenericType `extends Type`

- **type**: `"GenericType"`
- **id**: `Identifier`
- **typeParameters?**: `Array<Type>` xử dụng với template, ví dụ Array\<string\>


### VariableDeclaration `extends Statement`

- **type**: `"VariableDeclaration"`
- **id**: `Identifier`
- **typeAnnotation**: `typeAnnotation`

### BooleanLiteral `extends Literal`

- **type**: `"BooleanLiteral"`
- **value**: boolean

### StringLiteral `extends Literal`

- **type**: `"StringLiteral"`
- **value**: string

### NumbericLiteral `extends Literal`

- **type**: `"StringLiteral"`
- **value**: string



### BinaryOperator

- **type**: `"BinaryOperator"`
- **content**: `string`


### BinaryExpression `extends Expression`

- **type**: `"BinaryExpression"`
- **left**: `Expresison`
- **right**: `Expresison`
- "**operator**: `BinaryOperator`


### UnaryOperator

- **type**: `"UnaryOperator"`
- **content**: `string`

### UnaryExpression `extends Expression`

- **type**: `"UnaryExpression"`
- **argument**: `Expresison`
- "**operator**: `UnaryOperator`




### ArrayExpression `extends Expression`

- **type**: `"ArrayExpression"`
- **elements**: `Array<Expression>`

### MemberExpression `extends Expression`

- **type**: `"MemberExpression"`
- **object**: `Identifier | Expression`

- **property**: `Identifier | Expression`
- **computed**: `boolean`
	* `true`: `property` sẽ được xử dụng như biểu thức, ví dụ  `student["id"]`
  * `false`: `property` sẽ luôn là `Identifier`, ví dụ `student.id`

### CallExpression  `extends Expression`

- **type**: `"CallExpression"`
- **arguments**: `Array<Expression|Identifier>`
- **callee**: `Identifier|Expression`

> Hiện giờ editor chỉ hỗ trợ callee là  `Identifier`


### NewExpression  `extends Expression`

- **type**: `"NewExpression"`
- **arguments**: `Array<Expression|Identifier>`
- **callee**: `Identifier|Expression`

### ObjectProperty

- **type**: `"ObjectProperty"`
- **key**: `Identifier | StringLiteral`
- **value**: `Expression`

### ObjectExpression `extends Expression`

- **type**: `"ObjectExpression"`
- **properties**: `ObjectProperty`


### BlockStatement `extends Statement`

- **type**: `"BlockStatement"`
- **body**: `Array<Statement>`


### ExpressionStatement `extends Statement`

- **type**: `"ExpressionStatement"`
- **expression**: `Expression`


### AssignStatement  `extends Statement`

- **type**: `"AssignStatement"`
- **left**: `Identifier | MemberExpression`
- **right**: `Expression`



### BlockStatement `extends Statement`

- **type**: `"BlockStatement"`
- **body**: `Array<Statement>`

### ExpressionStatement `extends Statement`

- **type**: `"ExpressionStatement"`
- **expression**: `Expression`


## IfStatement `extends Statement`

- **type**: `"IfStatement"`
- **test**: `Expression`
- **consequent**: `Statement`
- **alternate?**: `Statement`


### ForCountStatement `extends Statement`

- **type**: `"ForCountStatement"`
- **for**: `Identifier` biến đếm
- **from**: `Expression`
- **to**: `Expression`
- **body**:  `Statement`

### ForOfStatement `extends Statement`

- **type**: `"ForStatement"`
- **for**: `Identifier` biến giá trị
- **of**: `Expression` array
- **body**:  `Statement`


### WhileStatement `extends Statement`

- **type**: `"WhileStatement"`
- **test**: `Expression` điều kiện
- **body**:  `Statement`


### DoWhileStatement `extends Statement`

- **type**: `"DoWhileStatement"`
- **test**: `Expression` điều kiện
- **body**:  `Statement`


### FunctionDeclaration

- **type**: `"FunctionDeclaration"`
- **id**: `Identifier` tên hàm
- **params**: `Array<ArgumentDeclaration>`
- **returnType**: `TypeAnnotation`
- **body**:  `BlockStatement`

### ArgumentDeclaration

- **type**: `"ArgumentDeclaration"`
- **id**: `Identifier` tên tham số
- **typeAnnotation**: `TypeAnnotation`


### ReturnStatement

- **type**: `"ReturnStatement"`
- **argument**: `Expression`

