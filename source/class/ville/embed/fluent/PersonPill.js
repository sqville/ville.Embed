/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonPill",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm5.88 5H5A2 2 0 0 0 3 13c0 1.7.83 2.97 2.13 3.8 1.1.7 2.52 1.08 4.06 1.17a3.61 3.61 0 0 1-.28-1.02 7.35 7.35 0 0 1-3.24-1A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h6.88l1-1Zm5.47-.35a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Z",
    FILLED : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2.88 9-2.94 2.94a3.62 3.62 0 0 0-.75 4.03 8.59 8.59 0 0 1-4.06-1.17A4.35 4.35 0 0 1 3 13a2 2 0 0 1 2-2h7.88Zm5.47-.35a2.62 2.62 0 0 0-3.7 0l-4 4a2.62 2.62 0 0 0 3.7 3.7l4-4a2.62 2.62 0 0 0 0-3.7Zm-3 .7a1.62 1.62 0 1 1 2.3 2.3L16 15.29 13.7 13l1.65-1.65Zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 0 1-.7-.7l1-1c.2-.2.5-.2.7 0Z"
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