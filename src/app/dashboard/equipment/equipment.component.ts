import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Equipment } from 'src/app/class/equipment/equipment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  private subscription: Subscription;
  public buttonText = "Rozwiń...";
  private show: Boolean = true;
  public statusClass: string = "description";
  public imageObject: Array<{ image: string, thumbImage: string, alt: string, title: string }> = []
  public ngOnInit() {
    this.subscription = this.dataService.getEquipment().subscribe((equipment: Equipment[]) => {
      for (let eq of equipment) {
        if (eq.availability) {
          if (!eq.broken) {
            this.imageObject.push({
              image: 'assets/equipment/1.jpg',
              thumbImage: 'assets/equipment/1.jpg',
              alt: eq.specification,
              title: eq.equipmentName + " - " + eq.specification
            })
          }
        }
      }
    });
  }
  public showText(): void {
    if (this.show) {
      this.statusClass = "show";
      this.buttonText = "Zwiń...";
      this.show = false;
    }
    else {
      this.statusClass = "description";
      this.buttonText = "Rozwiń...";
      this.show = true;
    }

  }
  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }


}
