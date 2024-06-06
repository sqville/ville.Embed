/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalculatorArrowClockwise",
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

   var pathdregular = "M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.63-3.07c.3-.58.7-1.1 1.17-1.52a1 1 0 1 0-1.17 1.52ZM6.5 17h3.11c.18.36.4.7.66 1H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v4.69c-.32-.1-.66-.16-1-.19V4.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5ZM6 5.5C6 4.67 6.67 4 7.5 4h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Zm10 7.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z";
   var pathdfilled = "M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h3.77a5.48 5.48 0 0 1-.64-6.07 1 1 0 1 1 1.17-1.52A5.48 5.48 0 0 1 16 9.19V4.5A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9.5-1.52a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z";
   
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