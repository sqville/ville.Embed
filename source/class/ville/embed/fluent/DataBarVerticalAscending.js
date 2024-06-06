/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataBarVerticalAscending",
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

   var pathdregular = "M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5c0-1.1.9-2 2-2Zm1 2a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V5Zm-4 3a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0V8Zm-2-1a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-3 4a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm-2-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z";
   var pathdfilled = "M15 3a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V5c0-1.1.9-2 2-2Zm-5 3a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0V8c0-1.1.9-2 2-2ZM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4c0-1.1.9-2 2-2Z";
   
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