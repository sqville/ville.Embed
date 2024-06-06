/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTrendingCheckmark",
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

   var pathdregular = "M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V4.7l-4.65 4.65a.5.5 0 0 1-.7 0L9 7.71l-5.15 5.14a.5.5 0 0 1-.7-.7l5.5-5.5a.5.5 0 0 1 .7 0L11 8.29 15.3 4h-2.8a.5.5 0 0 1 0-1h4ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.62-1.83a.5.5 0 0 0-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 0 0-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 0 0 .05-.7Z";
   var pathdfilled = "M16.75 3a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.8l-4.5 4.1a.75.75 0 0 1-1.03-.02L9 8.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06l5.25-5.25a.75.75 0 0 1 1.06 0l1.5 1.5 3.79-3.47h-2.57a.75.75 0 1 1 0-1.5h4.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.62-1.83a.5.5 0 0 0-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 0 0-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 0 0 .05-.7Z";
   
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