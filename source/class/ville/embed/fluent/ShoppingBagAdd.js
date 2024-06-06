/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBagAdd",
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

   var pathdregular = "M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5ZM10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2V7h6v3.26c.3-.26.64-.48 1-.66V7h3v2.02c.34.03.68.1 1 .19V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2Zm-3 2a1.5 1.5 0 1 1 3 0V6H7V4.5Zm3.67-1.25A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25Z";
   var pathdfilled = "M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5ZM6 6V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 0 1 1 1v2.2a5.5 5.5 0 0 0-4 .4V6h1V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5v5.76a5.49 5.49 0 0 0-.74 7.74H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1Zm4 0V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6h3Z";
   
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