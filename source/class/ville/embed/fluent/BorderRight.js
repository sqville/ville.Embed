/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderRight",
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

   var pathdregular = "M3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm1.05 2.96a2 2 0 0 0 1.55 1.5.5.5 0 0 1 .4.59.5.5 0 0 1-.66.38 3 3 0 0 1-2.29-2.34.5.5 0 0 1 .4-.6.5.5 0 0 1 .6.47Zm10.61 2.47a.5.5 0 0 1-.66-.38.5.5 0 0 1 .46-.6A2 2 0 0 0 16 14V6a2 2 0 0 0-1.6-1.95.5.5 0 0 1-.4-.6.5.5 0 0 1 .66-.38A3 3 0 0 1 17 6v8a3 3 0 0 1-2.34 2.93ZM3.06 5.4a3 3 0 0 1 2.36-2.36.5.5 0 0 1 .58.4.5.5 0 0 1-.46.6 2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.4-.59ZM12 3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3c.28 0 .5.22.5.5ZM11.5 17a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1h3Z";
   var pathdfilled = "M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM17 8.73V6a3 3 0 0 0-1.96-2.81.75.75 0 1 0-.58 1.38l.07.03c.57.21.97.76.97 1.4v8a1.5 1.5 0 0 1-1.04 1.43.75.75 0 0 0 .58 1.38A3 3 0 0 0 17 14V8.73ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .49-1.41ZM4.6 5.45a1.5 1.5 0 0 1 .94-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.5ZM11.25 17a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM12 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75Z";
   
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