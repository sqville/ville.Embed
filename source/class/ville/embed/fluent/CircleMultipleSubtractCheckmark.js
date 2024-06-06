/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleMultipleSubtractCheckmark",
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

   var pathdregular = "M7 2a5 5 0 0 1 4.92 4.08c.32-.05.66-.08 1-.08A6 6 0 1 0 6 12.92c0-.34.03-.68.08-1A5 5 0 0 1 7 2ZM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm11.35 5.85a.5.5 0 0 0-.7-.7l-2.65 2.64-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3ZM13 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-1a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z";
   var pathdfilled = "M12.92 6A7 7 0 0 0 6 12.92 6 6 0 1 1 12.92 6Zm-3.8 0H4.5a.5.5 0 0 0 0 1h3.2c.44-.38.92-.72 1.42-1ZM19 13a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-3.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-1.15-1.14a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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