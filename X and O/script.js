var t = new Array(9);

function ai() {
  var id = Math.floor(Math.random() * 9);
  t[id] ? ai() : move(id, 'ai');
}

function checkEnd() {
  if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' || t[0]=='player' && t[1]=='player' && t[2]=='player')  return 1;
  if (t[3]=='ai' && t[4]=='ai' && t[5]=='ai' || t[3]=='player' && t[4]=='player' && t[5]=='player')  return 1;
  if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai' || t[6]=='player' && t[7]=='player' && t[8]=='player')  return 1;
  if (t[0]=='ai' && t[3]=='ai' && t[6]=='ai' || t[0]=='player' && t[3]=='player' && t[6]=='player')  return 1;
  if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai' || t[1]=='player' && t[4]=='player' && t[7]=='player')  return 1;
  if (t[2]=='ai' && t[5]=='ai' && t[8]=='ai' || t[2]=='player' && t[5]=='player' && t[8]=='player')  return 1;
  if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai' || t[0]=='player' && t[4]=='player' && t[8]=='player')  return 1;
  if (t[2]=='ai' && t[4]=='ai' && t[6]=='ai' || t[2]=='player' && t[4]=='player' && t[6]=='player')  return 1;
  if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return 2;
  return 0;
}

function move(id, role) {
  if(t[id]) return false;
  t[id] = role;
  document.getElementById(id).className = 'cell ' + role;
  switch(checkEnd()){
		case 0:
			if(role=='player')ai();
			break;
		case 1:
			reset(role);
			break;
		case 2:
			role = 'over';
			reset(role);
			break;
  }
}

function reset(role) {
	var textAlert = "Игра окончена!";
	switch(role){
		case 'player':
			textAlert += " Победил ИГРОК!";
			break;
		case 'ai':
			textAlert += " Победил КОМПЬЮТЕР!";
			break;
		case 'over':
			textAlert += " Ничья!";
			break;
	}
  alert(textAlert);
  location.reload();
}