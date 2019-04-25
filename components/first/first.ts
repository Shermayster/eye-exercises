import classes from "./first.css";
export default () => {
  console.log(classes.main);
};
export class FirstComponent {
  row = /*html*/ `  
  <div class="row">
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
</div>`;

  render() {
    return /*html*/ `
    <section class="container">
    ${this.row}
    ${this.row}
    ${this.row}
    ${this.row}
    ${this.row}
    ${this.row}
    ${this.row}
    
    </section>
   
    `;
  }
}
