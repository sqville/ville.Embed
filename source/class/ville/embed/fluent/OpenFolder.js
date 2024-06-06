/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.OpenFolder",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.5a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2.5a.5.5 0 0 0 1 0V6a3 3 0 0 0-3-3H6Zm2.15 5.15A.5.5 0 0 1 8.5 8h4.99a.5.5 0 0 1 0 1H9.7l6.15 6.15a.5.5 0 0 1-.7.7L9 9.71v3.79a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .15-.35Z";
   var pathdfilled = "M3 6.25C3 4.45 4.46 3 6.25 3H14c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0v-2c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h4a.75.75 0 0 1 0 1.5h-4A3.25 3.25 0 0 1 3 13.75v-7.5Zm5 2.5c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l5.22 5.22a.75.75 0 1 1-1.06 1.06L9.5 10.56v2.69a.75.75 0 0 1-1.5 0v-4.5Z";
   
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