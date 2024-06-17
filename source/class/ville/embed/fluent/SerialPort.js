/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SerialPort",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7 11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4.77 6a2.5 2.5 0 0 0-2.44 3.07l.7 3A2.5 2.5 0 0 0 5.47 14h9.06a2.5 2.5 0 0 0 2.43-1.93l.7-3A2.5 2.5 0 0 0 15.23 6H4.77ZM3.3 8.84A1.5 1.5 0 0 1 4.77 7h10.46c.97 0 1.68.9 1.46 1.84l-.7 3A1.5 1.5 0 0 1 14.53 13H5.47c-.7 0-1.3-.48-1.46-1.16l-.7-3Z",
    FILLED : "M2.33 9.07A2.5 2.5 0 0 1 4.77 6h10.46a2.5 2.5 0 0 1 2.43 3.07l-.7 3A2.5 2.5 0 0 1 14.53 14H5.47a2.5 2.5 0 0 1-2.44-1.93l-.7-3ZM6 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8.5 9a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM7 11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM10 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
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