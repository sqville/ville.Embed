/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderTop",
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

   var pathdregular = "M11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Zm2.96-1.05a2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .38.66 3 3 0 0 1-2.34 2.29.5.5 0 0 1-.6-.4.5.5 0 0 1 .47-.6Zm2.47-10.61a.5.5 0 1 1-.98.2A2 2 0 0 0 14 4H6a2 2 0 0 0-1.95 1.6.5.5 0 0 1-.6.4.5.5 0 0 1-.38-.66A3 3 0 0 1 6 3h8a3 3 0 0 1 2.93 2.34ZM5.4 16.94a3 3 0 0 1-2.36-2.36.5.5 0 0 1 .4-.58.5.5 0 0 1 .6.46 2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.59.4ZM3.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5Zm13.5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z";
   var pathdfilled = "M12 16.25c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75ZM8.73 3H6a3 3 0 0 0-2.81 1.96.75.75 0 0 0 1.38.58l.03-.07A1.5 1.5 0 0 1 6 4.5h8a1.5 1.5 0 0 1 1.43 1.04.75.75 0 0 0 1.38-.58A3 3 0 0 0 14 3H8.73Zm6.67 11.55a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.77-1.77.75.75 0 1 0-1.41-.49Zm-9.95.85a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .5-1.41ZM17 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM3.75 8c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75Z";
   
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