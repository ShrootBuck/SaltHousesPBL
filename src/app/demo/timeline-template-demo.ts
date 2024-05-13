import { ChangeDetectorRef, Component } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material/button-toggle";

type EventItem = {
  header: string;
  location: string;
  description: string;
  class: "salthouses" | "realworld";
};

@Component({
  selector: "timeline-template-demo",
  templateUrl: "./timeline-template-demo.html",
})
export class TimelineTemplateDemo {
  state = "combined";

  staticEvents: EventItem[] = [
    {
      header: "Alia Marries Atef",
      location: "Nablus, Palestine",
      description:
        "Salma's daughter, Alia, weds Atef. Salma reads her future in a cup of coffee dregs. Though Salma reads a life full of uncertainty, instability, travel, and loss, she keeps the negative to herself, telling Alia that she sees a quick pregnancy and Atef's love for her.",
      class: "salthouses",
    },
    {
      header: "The Six-Day War",
      location: "Middle East",
      description:
        "The Six-Day War was fought between Israel and a coalition of Arab states including Egypt, Syria, and Jordan. It resulted in the deployment of the United Nations Emergency Force (UNEF) along the Egypt-Israel border.",
      class: "realworld",
    },
    {
      header: "Freedom Fighters",
      location: "Kuwait City",
      description:
        "In the Six-Day War, the family is displaced to Kuwait City. Atef and Mustafa stay behind to fight. They are both arrested and tortured. Atef gives up Mustafa, resulting in Mustafa's death.",
      class: "salthouses",
    },
    {
      header: "Family",
      location: "Kuwait City",
      description:
        "Alia and Atef have three children: Riham, Souad, and Karam. Though Atef is worried about the influence of the West on his children, he sends the three children to international schools for a better education.",
      class: "salthouses",
    },
    {
      header: "The Gulf War (1990)",
      location: "Persian Gulf",
      description:
        "The Gulf War was an armed conflict between Iraq and a 42-country coalition led by the United States. The coalition's efforts against Iraq were carried out in two key phases: Operation Desert Shield, which marked the military buildup from August 1990 to January 1991; and Operation Desert Storm, which began with the aerial bombing campaign against Iraq on 17 January 1991 and came to a close with the American-led liberation of Kuwait on 28 February 1991.",
      class: "realworld",
    },
    {
      header: "Uprooted",
      location: "Amman, Jordan & Beirut, Lebanon",
      description:
        "Alia and Atef move to Amman after the start of the Gulf War. They then move to Beirut and live together in their new home.",
      class: "salthouses",
    },
    {
      header: "College",
      location: "Paris, France & Boston, Massachusetts",
      description:
        "Riham moves to Amman and lives there with her husband. Souad attends university in Paris, and Karam in Boston.",
      class: "salthouses",
    },
    {
      header: "Marriage",
      location: "Boston, Massachusetts",
      description:
        "Souad has a chaotic marriage to Elie, and has two children, Manar and Zain. Karam marries Budur and they have one child, Linah, who becomes Zain's best friend.",
      class: "salthouses",
    },
    {
      header: "September 11 attacks",
      location: "Lower Manhattan, New York",
      description:
        "The September 11 attacks were four suicide terrorist attacks carried out by al-Qaeda against the United States on September 11, 2001. That morning, 19 terrorists hijacked four commercial airliners scheduled to travel from the East Coast to California. The hijackers crashed the first two planes into the Twin Towers of the World Trade Center in New York City, and aimed the next two flights toward targets in or near Washington, D.C., in an attack on the nation's capital. The third team succeeded in striking the Pentagon, while the fourth plane crashed in rural Pennsylvania during a passenger revolt. The September 11 attacks killed 2,977 people, making them the deadliest terrorist attack in history, and instigated the multi-decade global war on terror, fought in Afghanistan, Iraq, and elsewhere.",
      class: "realworld",
    },
    {
      header: "Racism",
      location: "Boston, Massachussetts",
      description:
        "Zain, Manar, and Linah face racism against Arabs in the United States following 9/11, and, during their summers in Beirut, face racism against Palestinians. ",
      class: "salthouses",
    },
    {
      header: "Alzheimer's",
      location: "Amman, Jordan",
      description:
        "Alia is diagnosed with Alzheimer's disease and, as she deteriorates, longs for a feeling of belonging and home.",
      class: "salthouses",
    },
  ];

  events = [...this.staticEvents];

  sortByClass(itemClass) {
    if (itemClass == "salthouses") {
      this.events = [...this.staticEvents];

      // Remove all "realworld" items
      this.events = this.events.filter(
        (item: EventItem) => item.class == "salthouses"
      );
    } else if (itemClass == "realworld") {
      this.events = [...this.staticEvents];

      // Remove all "salthouses" items
      this.events = this.events.filter(
        (item: EventItem) => item.class == "realworld"
      );
    } else {
      this.events = [...this.staticEvents];
    }
  }

  beginSort(toggleChange: MatButtonToggleChange) {
    this.sortByClass(toggleChange.source.value);
  }
}
