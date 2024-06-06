/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingMultiple",
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

   var pathdregular = "M2 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Zm10 13h2v-2h-2v2Zm3 0h2V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2ZM11 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13h5V7c0-1.1.9-2 2-2h1V4Zm1 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 14.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.5 8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   var pathdfilled = "M4 2a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H4Zm7 3h-1a2 2 0 0 0-2 2v10H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1ZM5.25 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm5.25-2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.75-2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z";
   
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