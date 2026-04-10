let sukHp =10
let sukDmg = 0;
let plyrHp = 5;
let plyrDmg = 0;

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




function atk ()
{
  if (dmg === 0)
  {
   plyrDmg = Math.floor(Math.random()*5)+1
  }
  if (dmg > sukHp)
  {
    console.log("damage altered, orginal is " +plyrDmg)
   plyrDmg = sukHp
  }
  sukHp-=dmg
  updateHp()
  log("Hit for " +plyrDmg + " damage!")
 plyrDmg = 0
  if (sukHp <= 0)
  {
    log("Sukuna died!")
    log("Game Over, you won!")
    sukHp+=10
  }
}
