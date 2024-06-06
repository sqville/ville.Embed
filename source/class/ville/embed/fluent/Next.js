/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Next",
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

   var pathdregular = "M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13ZM3 4.25c0-1 1.12-1.6 1.95-1.04l8.5 5.71c.73.5.73 1.57 0 2.07l-8.5 5.8A1.25 1.25 0 0 1 3 15.75V4.25Zm1.39-.2a.25.25 0 0 0-.39.2v11.5c0 .2.23.32.4.2l8.49-5.78a.25.25 0 0 0 0-.42l-8.5-5.7Z";
   var pathdfilled = "M3 4.25c0-1 1.12-1.6 1.95-1.04l8.5 5.71c.73.5.73 1.57 0 2.07l-8.5 5.8A1.25 1.25 0 0 1 3 15.75V4.25Zm14-.75a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13Z";
   
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