import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "project-ivy-app";
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    let i = 0;
    this.navLinks = this.router.config
      .filter(item => item.data != null && item.data.label != null)
      .map(item => {
        return {
          label: item.data.label,
          link: `/${item.path}`,
          index: i++
        };
      });
  }

  ngOnInit(): void {}
}
