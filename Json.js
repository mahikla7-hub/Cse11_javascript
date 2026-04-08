var text='{"employess":['+
'{firstName":"John","lastName":"Doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Jones"}]}';

obj=JSON.parse(text);
document.getElementById("demo").innerHTML=
obj.employees[1]
