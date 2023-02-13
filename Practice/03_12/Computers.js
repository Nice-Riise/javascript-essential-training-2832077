class Computer {
  constructor(
    //define paramaters
    name,
    color,
    screenSize,
    GBram,
    GBhdd,
    GHZcpu,
    wSpeakerRight,
    wSpeakerLeft,
    lidOpen
  ) {
    //define properties

    this.name = name;
    this.color = color;
    this.screenSize = screenSize;
    this.GBram = GBram;
    this.GBhdd = GBhdd;
    this.GHZcpu = GHZcpu;
    this.speakerPowerWatt = {
      right: wSpeakerRight,
      left: wSpeakerLeft,
    };

    this.lidOpen = lidOpen;
  }
  //togle lid
  togleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  //change speakers
  NewSpeakerUppgrade(wSpeakerLeft, wSpeakerRight) {
    this.speakerPowerWatt.wSpeakerRight = wSpeakerRight;
    this.speakerPowerWatt.wSpeakerLeft = wSpeakerLeft;
  }
}

export default Computer;
