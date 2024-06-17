/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GanttChart",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-8-7A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5C3 5.67 3.67 5 4.5 5H7v1h1V5h4v3h1V5h2.5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H13v-2h-1v2H8V9H7v6H4.5A1.5 1.5 0 0 1 3 13.5v-7Z",
    FILLED : "M2 6.5A2.5 2.5 0 0 1 4.5 4H7v2H4.5a1.5 1.5 0 1 0 0 3H7v7H4.5A2.5 2.5 0 0 1 2 13.5v-7ZM8 16V9.5c0 .83.67 1.5 1.5 1.5H11v.5c0 .65.42 1.2 1 1.41V16H8Zm2-8h2V4H8v2h.5c.83 0 1.5.67 1.5 1.5V8Zm5.5 5H13v3h2.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H13v4h.5c.83 0 1.5.67 1.5 1.5v.5h.5a1.5 1.5 0 0 1 0 3Zm-11-6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3.5 1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
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