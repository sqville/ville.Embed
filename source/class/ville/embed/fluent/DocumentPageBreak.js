/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentPageBreak",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 2.5V6c0 .83-.68 1.5-1.5 1.5H5.49A1.5 1.5 0 0 1 4 6V2.5a.5.5 0 1 1 1 0V6c0 .28.21.5.49.5h9.01A.5.5 0 0 0 15 6V2.5c0-.28.23-.5.5-.5s.5.22.5.5Zm-13 7a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H3Zm3.2 0a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H6.2Zm2.7.5c0-.28.22-.5.5-.5h1.2a.5.5 0 0 1 0 1H9.4a.5.5 0 0 1-.5-.5Zm3.7-.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1h-1.2Zm2.7.5c0-.28.22-.5.5-.5H17a.5.5 0 0 1 0 1h-1.2a.5.5 0 0 1-.5-.5Zm.7 4v3.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V14a.5.5 0 0 0-.5-.5H5.49a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.49-.5V14c0-.83.67-1.5 1.49-1.5h9.01c.82 0 1.5.67 1.5 1.5Z",
    FILLED : "M16 6V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V6c0 .83.67 1.5 1.49 1.5h9.01c.82 0 1.5-.67 1.5-1.5ZM3 9.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H3Zm3.2 0a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1H6.2Zm2.7.5c0-.28.22-.5.5-.5h1.2a.5.5 0 0 1 0 1H9.4a.5.5 0 0 1-.5-.5Zm3.7-.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1h-1.2Zm2.7.5c0-.28.22-.5.5-.5H17a.5.5 0 0 1 0 1h-1.2a.5.5 0 0 1-.5-.5Zm.7 7.5V14c0-.83-.68-1.5-1.5-1.5H5.49A1.5 1.5 0 0 0 4 14v3.5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5Z"
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