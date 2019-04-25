export class RouterComponent {
  domRouter = document.getElementById("router");

  setRoute(innerComponent) {
    this.domRouter.innerHTML = innerComponent;
  }
}
