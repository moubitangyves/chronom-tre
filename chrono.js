var sp, btn_start, btn_stop, t, s, mn, h;


window.onload = function(){
  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('start')
  btn_stop = document.getElementById('stop')
  t;
  ms=0, s=0, mn=0, h=0;
}

function update_chrono(){
  ms+=1
  if(ms==10){
    ms=1;
    s+=1
  }
  if(s==60){
    s=0;
    mn+=1
  }
  if(mn==60){
    mn=0;
    h+=1;
  }
  //insertion des valeurs sans le spans
  //[0] permet de select le 1er span
  //[1]                le 2eme span
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min"
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
// mettre en place la function du button start

function start(){
  //permet d'executer la function update-chrono()
  t =setInterval(update_chrono,100);
  btn_start.disabled = true;
}

//stopper le chrono

function stop(){
  clearInterval(t);// suppression de l'interval t que nous avions créer
  btn_start.disabled = false;
}

//reinisialiser le chrono

function reset(){
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0, s = 0, mn = 0, h = 0;
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
};
