function SuperMath(){
    this.check = function(obj){
        var question = confirm ('хотите ли Вы произвести действие znak c Х и У?');
        if (question == true){
            SuperMath.prototype.znak(obj);
        }
        else(SuperMath.prototype.input());
    }
}
SuperMath.prototype.znak = function (obj){
    if (obj.znak == '+'){
        var result = obj.X + obj.Y;
        console.log(result);
    } else if (obj.znak == '-'){
        var result = obj.X - obj.Y;
        console.log(result);
    } else if (obj.znak == '/'){
        var result = obj.X / obj.Y;
        console.log(result);
    } else if (obj.znak == '*'){
        var result = obj.X * obj.Y;
        console.log(result);
    } else if (obj.znak == '%'){
        var result = obj.X % obj.Y;
        console.log(result);
    }
}
SuperMath.prototype.input = function(){
    obj = {};
    obj.X = Number(prompt('Введите X'));
    obj.Y = Number(prompt('Введите Y'));
    obj.znak = prompt('Введите знак');
    SuperMath.prototype.znak(obj);
}

obj = { X:10, Y:5, znak: '+'};
p = new SuperMath();
p.check(obj);