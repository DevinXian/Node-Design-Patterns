function a() {

}
a.say = function(){
  console.log('a.say')
}

a.say()

console.log(a)

function L(name) {
  if(!new.target){
    return new L(name)
  }
  this.name = name
}

console.log(L('l'))
console.log(new L('l'))
