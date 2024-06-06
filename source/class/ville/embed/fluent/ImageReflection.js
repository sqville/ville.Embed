/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageReflection",
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

   var pathdregular = "M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 1.34 2.5A3 3 0 0 0 4 17a.5.5 0 0 0 1 0c0-1.1.9-2 2-2a.5.5 0 0 0 0-1 2 2 0 0 1-1.02-.28l3.53-3.52a.7.7 0 0 1 .98 0l3.53 3.52A2 2 0 0 1 13 14a.5.5 0 0 0 0 1 2 2 0 0 1 2 2 .5.5 0 0 0 1 0 3 3 0 0 0-1.34-2.5A3 3 0 0 0 16 12V6a3 3 0 0 0-3-3H7Zm1.8 6.5-3.52 3.52A2 2 0 0 1 5 12V6c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-.28 1.02L11.2 9.49a1.7 1.7 0 0 0-2.4 0Zm.7 4.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   var pathdfilled = "M4 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-1.34 2.5A3 3 0 0 1 16 17a.5.5 0 0 1-1 0 2 2 0 0 0-2-2 .5.5 0 0 1 0-1h-2.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1H7a.5.5 0 0 1 0 1 2 2 0 0 0-2 2 .5.5 0 0 1-1 0 3 3 0 0 1 1.34-2.5A3 3 0 0 1 4 12V6Zm1.98 7.72 3.53-3.52a.7.7 0 0 1 .98 0l3.53 3.52c.29-.17.53-.41.7-.7L11.2 9.49a1.7 1.7 0 0 0-2.4 0l-3.52 3.53c.17.29.41.53.7.7ZM13 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   
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