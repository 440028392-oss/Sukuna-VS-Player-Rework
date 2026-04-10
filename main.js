let sukHp =10
let sukDmg = 0;
let plyrHp = 5;
let plyrDmg = 0;
let dmg = 0;


function updateHp()
{
  document.getElementById("sukHp").textContent = sukHp;
}

function log(message)
{
  let logBox = document.getElementById("log")


  let msg=document.createElement("div")
  msg.textContent = message

  logBox.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2500);
}




function atk (name, baseDmg)
{
  plyrDmg = Math.floor(Math.random()*5) + 1  
  dmg =  baseDmg + plyrDmg
  if (dmg > sukHp)
  {
    console.log("damage altered, orginal is " + dmg)
   dmg = sukHp
  }
  sukHp-=dmg
  updateHp()
  log("Player used " + name + "!")
  log("Hit for " + dmg + " damage!")
 dmg = 0
  if (sukHp <= 0)
  {
    log("Sukuna died!")
    log("Game Over, you won!")
    sukHp+=10
  }
}

function endGame (message)
{
  let gameOverScreen = document.getElementById("gameOverScreen")

  let msg=document.createElement("div")
  msg.textContent = message

  document.getElementById("gameUi").style.display = "none"


  gameOverScreen.appendChild(msg)

    setTimeout(() => 
  {
    msg.remove()
  }, 5000)
}
