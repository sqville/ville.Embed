/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TicketHorizontal",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 5c.83 0 1.5.67 1.5 1.5V8a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3c.28 0 .5.22.5.5v1.5c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5V12c0-.28.22-.5.5-.5a1.5 1.5 0 0 0 0-3A.5.5 0 0 1 2 8V6.5C2 5.67 2.67 5 3.5 5h13Zm.5 1.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1-.16-4.86l.16-.04V6.5Z",
    FILLED : "M18 6v1.5a.5.5 0 0 1-.5.5 2 2 0 1 0 0 4c.28 0 .5.22.5.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.5c0-.28.22-.5.5-.5a2 2 0 1 0 0-4 .5.5 0 0 1-.5-.5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
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