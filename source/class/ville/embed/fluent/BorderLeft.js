/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderLeft",
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

   var pathdregular = "M17 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1.05-2.96a2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .66-.38 3 3 0 0 1 2.29 2.34.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47ZM5.34 3.07a.5.5 0 0 1 .66.38.5.5 0 0 1-.46.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.6 1.95.5.5 0 0 1 .4.6.5.5 0 0 1-.66.38A3 3 0 0 1 3 14V6a3 3 0 0 1 2.34-2.93Zm11.6 11.52a3 3 0 0 1-2.36 2.36.5.5 0 0 1-.58-.4.5.5 0 0 1 .46-.6 2 2 0 0 0 1.5-1.55.5.5 0 0 1 .59-.4.5.5 0 0 1 .4.6ZM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z";
   var pathdfilled = "M16.25 8c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75ZM3 11.27V14a3 3 0 0 0 1.96 2.81.75.75 0 0 0 .58-1.38A1.5 1.5 0 0 1 4.5 14V6a1.5 1.5 0 0 1 1.03-1.43.75.75 0 0 0-.58-1.38A3 3 0 0 0 3 6v5.27ZM14.55 4.6a1.5 1.5 0 0 1 .88.94.75.75 0 0 0 1.38-.58 3 3 0 0 0-1.77-1.77.75.75 0 1 0-.49 1.41Zm.85 9.95a1.5 1.5 0 0 1-.94.88.75.75 0 0 0 .58 1.38 3 3 0 0 0 1.77-1.77.75.75 0 1 0-1.41-.5ZM8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM8 16.25c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z";
   
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