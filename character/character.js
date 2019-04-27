class character {
  name = '';
  life = 0;
  strong = 0;

  constructor({ name, life, strong }){
     this.name = name;
     this.life = life;
     this.strong = strong;     
  }

  getDamage = (dmg) => {
    console.log('danio de ', this.name, this.life);
    this.life-= dmg;
  }

  doDamage = () => {}
}


export default character;