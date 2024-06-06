/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentCopy",
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

   var pathdregular = "M6 4c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 11 6.5V3H8Zm4 .2v3.3c0 .28.22.5.5.5h3.3L12 3.2ZM4 5a1 1 0 0 1 1-1v10a3 3 0 0 0 3 3h7a1 1 0 0 1-1 1H7.94A3.94 3.94 0 0 1 4 14.06V5Z";
   var pathdfilled = "M11 6.5V2H7.5C6.67 2 6 2.67 6 3.5v11c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 11 6.5Zm1 0V2.25L16.75 7H12.5a.5.5 0 0 1-.5-.5ZM4 5a1 1 0 0 1 1-1v10.5A2.5 2.5 0 0 0 7.5 17H15a1 1 0 0 1-1 1H7.55A3.55 3.55 0 0 1 4 14.45V5Z";
   
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