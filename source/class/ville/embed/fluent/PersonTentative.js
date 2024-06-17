/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonTentative",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17l.6-.01c.17.34.37.66.61.95-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm12.5-3h.28l-4.77 4.78-.01-.28a4.5 4.5 0 0 1 4.5-4.5Zm-3.52 7.3a4.5 4.5 0 0 1-.74-1.34l5.61-5.6a.5.5 0 0 0 .1-.12c.5.17.95.42 1.36.74l-6.33 6.33Zm7.78-4.26c-.17-.5-.43-.95-.74-1.35l-6.33 6.33c.4.32.87.57 1.37.74a.5.5 0 0 1 .09-.11l5.6-5.61Zm-4.54 5.95.28.01a4.5 4.5 0 0 0 4.5-4.78l-4.78 4.77Z",
    FILLED : "M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.26a5.48 5.48 0 0 0-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm12.5-3h.28l-4.77 4.78-.01-.28a4.5 4.5 0 0 1 4.5-4.5Zm-3.52 7.3a4.5 4.5 0 0 1-.74-1.34l5.61-5.6a.5.5 0 0 0 .1-.12c.5.17.95.42 1.36.74l-6.33 6.33Zm7.78-4.26c-.17-.5-.43-.95-.74-1.35l-6.33 6.33c.4.32.87.57 1.37.74a.5.5 0 0 1 .09-.11l5.6-5.61Zm-4.54 5.95.28.01a4.5 4.5 0 0 0 4.5-4.78l-4.78 4.77Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});