import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { FirstComponent } from "./components/first/first";
import "./components/first/first.css";
import { RouterComponent } from "./components/router/router";
import { SecondComponent } from "./components/second/second";

const router = new RouterComponent();
const sub = fromEvent(document.getElementById("first"), "click");
const sub2 = fromEvent(document.getElementById("second"), "click");

sub
  .pipe(
    map(e => new FirstComponent()),
    map(firs => firs.render())
  )
  .subscribe(comp => {
    router.setRoute(comp);
  });

sub2
  .pipe(
    map(e => new SecondComponent()),
    map(second => second.render())
  )
  .subscribe(comp => {
    router.setRoute(comp);
  });
