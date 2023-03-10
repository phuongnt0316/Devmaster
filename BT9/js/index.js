var name1 = document.getElementById("txtName");
console.log(name1);
var txtH1=document.getElementsByTagName("h1");
console.log(txtH1);
var txtP=document.getElementsByClassName("txtP");
console.log(txtP);
var employee= [{
    name: 'Phuong',
    age: '24',
    address: 'Hai Duong',
    isValid: false,
    addInfor: function(){
        console.log("infor");
    }
},
{
    name: 'Phuong',
    age: '24',
    address:'Hai Duong'  
},
{
    name: 'Phuong',
    age: '24',
    address:'Hai Duong'  
}]
console.log(employee);
var obj = new Object();
var obj={
    name: 'Phuong',
    age: '24',
    address: 'Hai Duong',
    isValid: false,
    addInfor: function(){
        console.log("infor");
    }

}
console.log(obj.addInfor);
 var datetime= new Date();
 console.log(datetime);
 console.log(datetime.getMilliseconds())
