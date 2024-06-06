/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyCommand",
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

   var pathdregular = "M5.5 4C6.33 4 7 4.67 7 5.5V7H5.5a1.5 1.5 0 1 1 0-3ZM8 7V5.5A2.5 2.5 0 1 0 5.5 8H7v4H5.5A2.5 2.5 0 1 0 8 14.5V13h4v1.5a2.5 2.5 0 1 0 2.5-2.5H13V8h1.5A2.5 2.5 0 1 0 12 5.5V7H8Zm0 1h4v4H8V8Zm5-1V5.5A1.5 1.5 0 1 1 14.5 7H13Zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V13Zm-6 0v1.5A1.5 1.5 0 1 1 5.5 13H7Z";
   var pathdfilled = "M5.75 4.5C6.44 4.5 7 5.06 7 5.75V7H5.75a1.25 1.25 0 1 1 0-2.5ZM8.5 7V5.75A2.75 2.75 0 1 0 5.75 8.5H7v3H5.75a2.75 2.75 0 1 0 2.75 2.75V13h3v1.25a2.75 2.75 0 1 0 2.75-2.75H13v-3h1.25a2.75 2.75 0 1 0-2.75-2.75V7h-3Zm0 1.5h3v3h-3v-3ZM13 7V5.75A1.25 1.25 0 1 1 14.25 7H13Zm0 6h1.25A1.25 1.25 0 1 1 13 14.25V13Zm-6 0v1.25A1.25 1.25 0 1 1 5.75 13H7Z";
   
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