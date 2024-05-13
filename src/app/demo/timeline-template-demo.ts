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
      class: "realworld",
    },
  ];

  events = JSON.parse(JSON.stringify(this.staticEvents));

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
