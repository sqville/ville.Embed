/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBagArrowLeft",
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

   var pathdregular = "M15 6a1 1 0 0 1 1 1v2.2c-.32-.08-.66-.15-1-.18V7h-3v2.6c-.36.18-.7.4-1 .66V7H5v8a1.98 1.98 0 0 0 1.23 1.84c.24.1.5.16.77.16h2.6c.18.36.4.7.66 1H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1Zm-2-1.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5V6h2V4.5ZM7 6h3V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6Zm7.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-2.36-4.85 2-2a.5.5 0 0 1 .71.7L13.71 14h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1-.15-.35.5.5 0 0 1 .14-.35Z";
   var pathdfilled = "M6 6V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 0 1 1 1v2.2a5.5 5.5 0 0 0-4 .4V6h1V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5v5.76a5.49 5.49 0 0 0-.74 7.74H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1Zm4 0V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6h3Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-6.85-.35a.5.5 0 0 0-.15.35.5.5 0 0 0 .15.35l2 2a.5.5 0 0 0 .7-.7L13.71 15h2.79a.5.5 0 0 0 0-1h-2.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2Z";
   
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