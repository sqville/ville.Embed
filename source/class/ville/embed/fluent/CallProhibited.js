/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallProhibited",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M17.15 4.66A10.37 10.37 0 0 0 10 2C6.67 2 4.1 3.29 2.68 4.67c-.6.59-.83 1.46-.58 2.28l.25.83A1.74 1.74 0 0 0 4.17 9l1.63-.16c.7-.07 1-.66 1.2-1.33.3-1 .5-1.75.5-1.75a6.63 6.63 0 0 1 5 0s.2.75.5 1.75c.22.74.75 1.26 1.47 1.33l1.63.16c.83.08 1.55-.44 1.7-1.22l.16-.83c.16-.82-.15-1.7-.8-2.28Zm-3.65.96-.02-.1-.01-.02c-.1-.4-.44-.61-.6-.68a7.62 7.62 0 0 0-5.73-.01c-.16.09-.51.34-.61.7l-.03.1a90.96 90.96 0 0 1-.46 1.6c-.09.3-.17.47-.24.56a.2.2 0 0 1-.05.05l-.05.01L4.07 8a.74.74 0 0 1-.77-.5l-.24-.83c-.15-.48-.02-.96.31-1.28A9.62 9.62 0 0 1 10 3a9.37 9.37 0 0 1 6.5 2.4c.4.37.57.89.48 1.35l-.16.83c-.05.24-.27.45-.62.41l-1.64-.16c-.21-.02-.47-.17-.6-.62a59.02 59.02 0 0 1-.46-1.59ZM6.82 16.68a4.5 4.5 0 1 0 6.36-6.36 4.5 4.5 0 0 0-6.36 6.36Zm5.65-.7a3.5 3.5 0 0 1-4.57.32l4.9-4.9a3.5 3.5 0 0 1-.33 4.57Zm-.37-5.28-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z";
   var pathdfilled = "m17.96 6.94-.16.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 0 0-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.67 2.51 9.99 2.5c3.33 0 5.6.78 7.16 2.16.66.58.97 1.46.8 2.28ZM6.82 16.68a4.5 4.5 0 1 0 6.36-6.36 4.5 4.5 0 0 0-6.36 6.36Zm5.65-.7a3.5 3.5 0 0 1-4.57.32l4.9-4.9a3.5 3.5 0 0 1-.33 4.57Zm-.37-5.28-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});