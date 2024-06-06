/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowExpand",
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

   var pathdregular = "M3.5 3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V4.7l3.15 3.15a.5.5 0 1 0 .7-.7L4.71 4H7.5a.5.5 0 0 0 0-1h-4Zm0 14a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.8l3.15-3.15a.5.5 0 0 1 .7.7L4.71 16H7.5a.5.5 0 0 1 0 1h-4ZM17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.8l-3.15 3.15a.5.5 0 0 0 .7.7L16 4.71V7.5a.5.5 0 0 0 1 0v-4ZM16.5 17a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.8l-3.15-3.15a.5.5 0 0 0-.7.7L15.29 16H12.5a.5.5 0 0 0 0 1h4Z";
   var pathdfilled = "M3.75 3a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0V5.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h1.69a.75.75 0 0 0 0-1.5h-3.5Zm0 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L5.56 15.5h1.69a.75.75 0 0 1 0 1.5h-3.5ZM17 3.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69l-2.22 2.22a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5ZM16.25 17c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-1.5 0v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22h-1.69a.75.75 0 0 0 0 1.5h3.5Z";
   
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