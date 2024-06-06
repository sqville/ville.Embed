/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberRow",
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

   var pathdregular = "M5 6.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM4 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4ZM3 5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Zm10.5 1a.5.5 0 0 0 0 1H15v2.5h-1.5a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H14v-2.5h1.5a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5h-2ZM13 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm-1 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5Z";
   var pathdfilled = "M4 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1 3.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM13 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Zm.5 3h2c.28 0 .5.22.5.5V10a.5.5 0 0 1-.5.5H14V13h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5V10c0-.28.22-.5.5-.5H15V7h-1.5a.5.5 0 0 1 0-1Z";
   
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