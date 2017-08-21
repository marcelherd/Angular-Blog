import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  private baconIpsum = `Spicy jalapeno bacon ipsum dolor amet ham pastrami meatball pork belly, jerky filet mignon turkey.
                          Turducken brisket ground round tenderloin, salami sausage tongue short loin shankle ham hock picanha.
  Turducken corned beef turkey burgdoggen leberkas. Flank bresaola doner, sirloin meatball cow jowl.
  Biltong filet mignon t-bone drumstick porchetta cupim, strip steak andouille shoulder capicola short loin flank sausage.

  Meatloaf corned beef boudin t-bone, biltong shank ham hock filet mignon.
  Jowl cow turkey shankle pork burgdoggen chicken tail strip steak ball tip brisket chuck doner kevin.
  Kevin spare ribs pork belly salami pancetta.
  Chicken andouille strip steak turkey ribeye tri-tip meatloaf kevin pork belly porchetta ground round doner hamburger.

  Jerky ball tip boudin shank bresaola pastrami.
  Ribeye hamburger shank corned beef biltong spare ribs jerky fatback ball tip chicken prosciutto jowl brisket.
  Capicola shank t-bone burgdoggen short ribs, jowl hamburger.
  Ball tip biltong filet mignon turducken, pig meatball meatloaf short ribs sirloin short loin pork loin strip steak tri-tip bacon burgdoggen.

  Landjaeger cupim jerky leberkas ground round.
  Kielbasa jerky pork chop ball tip beef, meatloaf jowl boudin.
  Hamburger fatback bresaola cow beef boudin shankle rump ground round biltong corned beef andouille spare ribs.
  Andouille beef ribs tail boudin, burgdoggen ribeye leberkas jowl ground round porchetta short ribs.

  Ground round pastrami turkey andouille burgdoggen kielbasa.
  Kevin shoulder venison salami pancetta chuck meatloaf corned beef.
  Kielbasa t-bone tri-tip picanha jerky spare ribs pork belly, venison short loin jowl pig leberkas ball tip cupim shoulder.
  Hamburger ground round turkey, frankfurter salami prosciutto bresaola ball tip meatball ham pork chop.`;

  createDb() {
    const posts = [
      { id: 0, title: 'My First Post', body: this.baconIpsum },
      { id: 1, title: 'My Second Post', body: this.baconIpsum },
      { id: 2, title: 'My Third Post', body: this.baconIpsum },
    ];

    return { posts };
  }

}
