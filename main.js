let sukHp =10;
let sukDmg = 0;
let sukdmg = 0;
let plyrHp = 10;
let plyrDmg = 0;
let plyrdmg = 0;
let sukMove = 0;

function updateSukHp()
{
  document.getElementById("sukHp").textContent = sukHp
}

function updatePlyrHp ()
{
  document.getElementById("plyrHp").textContent = plyrHp
}

function log(message)
{
  let logBox = document.getElementById("log")


  let msg=document.createElement("div")
  msg.textContent = message

  logBox.appendChild(msg)

  setTimeout(() => 
  {
    msg.remove()
  }, 2500)
}


function sukAtk (name, baseDmg)
{
  sukdmg = Math.floor(Math.random()*5) + 1
  sukdmg = baseDmg + sukDmg
  if (sukdmg > plyrHp)
  {
    sukdmg = plyrHp
  }
  updatePlyrHp()
  log("Sukuna used " + name + "!")
  log("Sukuna dealt " + sukdmg + " damage!")
  sukdmg = 0
  if (plyrHp <= 0)
  {
    log("You died!")
    endBattle("Battle Over...")
    plyrHp = 10
  }
}

function plyrAtk (name, baseDmg)
{
  plyrDmg = Math.floor(Math.random()*3) + 1
  plyrdmg =  baseDmg + plyrDmg
  if (plyrdmg > sukHp)
  {
    console.log("damage altered, orginal is " + plyrdmg)
   plyrdmg = sukHp
  }
  sukHp-=plyrdmg
  updateSukHp()
  log("Player used " + name + "!")
  log("Hit for " + plyrdmg + " damage!")
 plyrdmg = 0
  if (sukHp <= 0)
  {
    log("Sukuna died!")
    endBattle("Battle Over!")
    sukHp = 10
  }
  sukMove = Math.floor(Math.random()*1) + 1
  setTimeout (() => 
  {
    if (sukMove === 1)
  {
    sukAtk("Slash", 3)
  } 
  }, 3000);
}

function endBattle (message)
{
  let battleOverScreen = document.getElementById("battleOverScreen")

  let msg=document.createElement("div")
  msg.textContent = message

  document.getElementById("battleUi").style.display = "none"

  battleOverScreen.appendChild(msg)

    setTimeout(() => 
  {
    msg.remove()
  }, 5000)
}