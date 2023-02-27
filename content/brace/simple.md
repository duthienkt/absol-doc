# [Demo](https://absol.cf/libs/absol-brace/)

# Tạo công cụ soạn thảo BraceEditor

```js
var editor = AbsolBrace.BraceEditor({
  //element: '#your-element-id',
  element: yourElement,
  option: {
    mode: 'ace/mode/javascript'
  }
});


// gán giá trị, nếu param thứ 2 != true thì code sẽ bị bôi đen
editor.setValue('function BraceDiff(}... your code', true);

//lấy giá trị
 console.log(editor.getValue());

editor.on('change', function () {
  //được gọi khi code thay đổi
  console.log(editor.getValue())
})


```

- **element:** `HTMLElement` hoặc `string`(tương tự query của css trỏ tới element), nên dùng kiểu `HTMLElement` - **required**

- **option:** `struct` - **not required**
    * **mode**: `string`,  - **required**,

  hỗ trợ các giá trị `"ace/mode/javascript"`, `"ace/mode/php"`, `"ace/mode/json"`, `"ace/mode/text"`, `"ace/mode/html"`, `"ace/mode/sql"`, `"ace/mode/css"`,  `"ace/mode/markdown"`, tương ứng các ngôn ngữ được hỗ trợ, mặc định `"ace/mode/text"`

# Tạo công cụ so sánh code BraceDiff

```js
var differ = AbsolBrace.BraceDiff({
        element: '.test0',//required
        //tương tự option của BraceEditor
  			option: {
            mode: 'ace/mode/javascript'
        },
  			//Khởi tạo giá trị cho 2 ô soạn thảo, không yêu cầu phải có
        left: {
            value: 'function BraceDiff(props) ...'
        },
  
        right: {
            value: 'function BraceDiff(option) ...'
        }
    });
	
		//có thể gán dữ liệu vào 2 ô độc lập

		differ.editorLeft.setValue('....', true);
		differ.editorRight.setValue('....', true);


    differ.editorLeft.on('change', function (){
        console.log(differ.editorLeft.getValue());
    });

    differ.editorRight.on('change', function (){
        console.log(differ.editorRight.getValue());
    })

```

