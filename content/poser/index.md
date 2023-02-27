# Demo

- [Làm bài](https://absol.cf/libs/absol-poser/demo/viewer.html)
- [Chấm bài](https://absol.cf/libs/absol-poser/demo/evaluation.html)
- [Sửa câu khỏi(Không có section)](https://absol.cf/libs/absol-poser/demo/editor_without_section.html)
- [Xem kết quả chấm bài](https://absol.cf/libs/absol-poser/demo/evaluation.html?readOnly)

Các file dữ liệu mẫu

- [Dữ liệu câu hỏi](https://absol.cf/libs/absol-poser/demo/demo_data.js)
- [Dữ liệu trả lời](https://absol.cf/libs/absol-poser/demo/demo_result.js)
- [Dữ liệu chấm bài](https://absol.cf/libs/absol-poser/demo/demo_evaluation.js)




# *class* PoserViewer(opt: PoserViewerOption) extends [Fragment](../absol/Fragment), [EventEmitter](../absol/EventEmitter)

## `setData(data: Array<APSectionData>, order?: number)=> void`
Nếu option có `shuffleQuestion: true`, trường hợp order là null hoặc không truyền order, thứ tự câu hỏi sẽ được sinh ngẫu nhiên

## `getData() => Array<APSectionData>`
Lấy dữ liệu đã truyền vào

## `getOrder()=> Array<number>`
Lấy array thứ tự các câu hỏi theo `ident`

## `setResult(resultDict: Object<string, any>)=> void`
Truyền vào đáp án mà người dùng đã làm


## `getResult() => Object<string, any>`
Lấy đáp án người dùng đã làm

Module
```js
var PoserViewer = absol.poser.PoserViewer;

var viewer = new PoserViewer({
	readOnly: true || false
});
var viewerElt = viewer.getView();

viewer.on('resultchange', function () {
	var result = this.getResult();
	
});


viewer.setResult(yourResult);
//trong trường hợp có order
viewer.setResult(yourResult, order);

```

Mẫu result
```js
{
  //2 là ident của câu hỏi
    "2": {
        ident: 0,//ident của câu trả lời, nếu không có sẽ sinh tự động
        value: "Nguyễn Văn Bình Nguyên"//câu trả lời ngắn hoặc câu trả lời dài
    },
    "6": {
        ident: 3,
        value: {// trắc nghiệm 1 đám án
            idx: 0
        }
    },
    "22": {
        ident: 6,
        value: [//trắc nghiệm nhiều đám án
            {
                idx: 0
            },
            {
                idx: 1
            }
        ]
    },
    "42": {
        ident: 11,
        value: 6 // trả lời tuyến tính 
    }
}
```

## PoserViewerOption

- **hasScroller**: `boolean`
    + `true`: **mặc định**, có thanh cuộn trong trường hợp chiều cao cố định
    + `false`: không có thanh cuộn, nội dung sẽ tự mở rộng dài ra
- **readOnly**: `boolean`, chỉ xem, dùng khi cho người dùng xem lại trước khi nộp ...
- **shuffleQuestion**: `boolean`, tùy chọn tự tạo thứ tự ngẫu nhiên cho câu hỏi trong trường hợp không truyền vào order


# *class* PoserEditor(opt: PoserEditorOption)  extends [Fragment](), [EventEmitter]()

## `setData(data: Array<APSectionData>) => void`


## `getData() => Array<APSectionData>`

## `addNewSection(props: APSectionProps) => void`
Thêm section mới phía sau block đang được chọn(có viền sáng màu vàng)

## `addNewQuestion(props: APQuestionData) => void`
Thêm câu hỏi mới phía sau block đang được chọn


Module
```js
var PoserEditor = absol.poser.PoserEditor;
```

Tạo một editor mới
```js
var mPoserEditor = new PoserEditor({
  hasScroller: false,
  hasTool: false,
  hasSection: false,
  questionTypes: ["short_answer", "multiple_choice"]
});
document.body.appendChild(mPoserEditor.getView())
```

## PoserEditorOption

- **hasScroller**: `boolean`
    + `true`: **mặc định**, có thanh cuộn trong trường hợp chiều cao cố định
    + `false`: không có thanh cuộn, nội dung sẽ tự mở rộng dài ra
- **hasTool**: boolean, **mặc định `true`**, có hoặc không có thanh công cụ ở trên đầu
- **hasSection**: boolean, **mặc định `true`**, trong trường hợp là `false`, tất cả các câu hỏi sẽ tự động gộp vào 1 section và phần section sẽ ẩn đi, định dạng dữ liệu giống khi có section
- **questionTypes**: `Array<QuestionTypeString>`, không truyền tức là tất cả các loại đều được xử dụng

## QuestionTypeString

Các giá trị:

- `"short_answer"`: Trả lời ngắn
- `"paragraph"`: Trả lời dài
- `"multiple_choice"`: Trắc nghiệm (Một đáp án)
- `"checkboxes"`: Trắc nghiệm (Nhiều đáp án)
- `"linear_scale"`: Phạm vi tuyến tính

```js
 var mPoserEditor = new PoserEditor({
   hasScroller: false,
   hasTool: false,
   hasSection: false,
   questionTypes: ['multiple_choice', 'checkboxes']
 });
```

> Nếu trong phần dữ liệu có loại câu hỏi không thuộc questionTypes, câu hỏi vẫn hiển thị, nhưng nếu đổi sang dạng câu hỏi khác sẽ không thể quay lại được nữa

# *class* PoserEvaluation(opt: PoserEvaluationOption)

## `setData(data:{sections:Array<APSectionData>, result:Object<string, any>, order?:Array<number>}) => void`

## `getEvaluation() => Object<string, any>`
Lấy kết quả chấm điểm


## `setEvaluation(evaluationData: Object<string, any>) => void`
Truyền dữ liệu chấm điểm

```js
var opt = {
  hasScroller: false
};
if (location.href.indexOf('readOnly') >= 0) {//trong trường hợp hiển thị kết quả, không chấm điểm
  opt.readOnly = true;
}
var mEvaluation = new PoserEvaluation(opt);
var eView = mEvaluation.getView();
eView.addClass('ap-without-scroller');
ctn.addChild(eView);
mEvaluation.setData({sections:sections, result: result, order: order});

```



# Dữ liêu

## Câu hỏi

### Section

- **name**: `string`
- **description**: `string`
- **images**: `Array<string|File|Blob>`
- **ident**: `string|number`

### Question

- **type**: `string`
- **ident**: `string|number`
- **content**: `string`
- **description**: `string`
- **images**: `Array<string|File|Blob>`
- **required**: `boolean`
- **note**: `string`
- **score**: `number`
- **correct_answer**: `*`, tùy thuộc vào type

## ShortAnswerQuestion `extends Question`

