# Object


## relaceFileInObject(o: object, replacer: function): Promise\<object>

```js
var myObject = {
	 a:1,
  b: 2, 
  c:{y: 4, z: myFile1},
  d: myFile2
};

absol.$.replaceFileInObject(myObject, function(value, key, subObject){
	return uploadFle(value).then(function(result){
    return result.fileUrl;
  });
}).then(function(myNewObject){
	doSomethingWith(myNewObject);
});

```