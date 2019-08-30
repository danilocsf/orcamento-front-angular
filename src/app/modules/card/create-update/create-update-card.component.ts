import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Card } from "../card.model";

@Component({
  selector: "create-update-card",
  templateUrl: "./create-update-card.component.html",
  styleUrls: ["./create-update-card.component.css"]
})
export class CreateUpdateCardComponent implements OnInit {
  formCard: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(new Card());
  }

  createForm(card: Card) {
    this.formCard = new FormGroup({
      id: new FormControl(card.id),
      cardOwner: new FormControl(card.cardOwner),
      cardNumber: new FormControl(card.cardOwner),
      active: new FormControl(card.active)
    });
  }
}
