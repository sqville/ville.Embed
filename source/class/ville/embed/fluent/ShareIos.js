/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShareIos",
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

   var pathdregular = "M10.35 2.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L9.5 3.71v8.79a.5.5 0 0 0 1 0V3.7l3.65 3.65a.5.5 0 0 0 .7-.7l-4.5-4.5ZM4 9.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.5Z";
   var pathdfilled = "M10.29 2.06a.75.75 0 0 0-.82.16L5.22 6.47a.75.75 0 0 0 1.06 1.06l2.97-2.97v7.69a.75.75 0 0 0 1.5 0V4.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-.24-.16ZM3.75 9c.41 0 .75.34.75.75v4c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 0 1 3 13.75v-4c0-.41.34-.75.75-.75Z";
   
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