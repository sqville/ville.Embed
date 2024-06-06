/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShieldProhibited",
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

   var pathdregular = "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0l.07-.03c-.55-.4-1.02-.9-1.38-1.48C5.6 14.86 4 12.56 4 9.5V5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43V8.6c.36.18.7.4 1 .66V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42Zm.42 13.52 4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Zm.7.7a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Zm2.1 1.7a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z";
   var pathdfilled = "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0l.07-.03A5.5 5.5 0 1 1 17 9.26V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42Zm.42 13.52 4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Zm.7.7a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Zm2.1 1.7a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z";
   
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