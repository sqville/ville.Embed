/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardLayoutSplit",
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

   var pathdregular = "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-8ZM3.5 5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13ZM5 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.5 12a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3Zm0-4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM12.25 8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM14 9.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   var pathdfilled = "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5v-8Zm3 7c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM4.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM5.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM14.5 12h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1Zm0-4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM12.25 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14 9.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   
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