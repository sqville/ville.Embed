/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShieldTask",
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

   var pathdregular = "M13.85 7.85a.5.5 0 0 0-.7-.7L9.5 10.79 7.85 9.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4Zm-3.57-5.77a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42ZM4 5.43a15.97 15.97 0 0 0 5.6-2.08l.4-.25.4.25A15.97 15.97 0 0 0 16 5.43V9.5c0 3.4-1.97 5.86-6 7.46-4.03-1.6-6-4.07-6-7.46V5.43Z";
   var pathdfilled = "M10.28 2.08a.5.5 0 0 0-.56 0 15.05 15.05 0 0 1-6.3 2.43A.5.5 0 0 0 3 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 0 0 .36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 0 0-.43-.5 15.05 15.05 0 0 1-6.3-2.42Zm3.57 5.77-4 4a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7l1.65 1.64 3.65-3.64a.5.5 0 0 1 .7.7Z";
   
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