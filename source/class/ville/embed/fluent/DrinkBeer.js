/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkBeer",
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

   var pathdregular = "M12.5 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm-3-.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5Zm-2 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm-1-6A2.5 2.5 0 0 0 4 4.5v11.75c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V15h.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 5H15v-.5A2.5 2.5 0 0 0 12.5 2h-6ZM15 6h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H15V6ZM5 4.5C5 3.67 5.67 3 6.5 3h6c.83 0 1.5.67 1.5 1.5V5H5v-.5ZM5 6h9v10.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 0 1-.75-.75V6Z";
   var pathdfilled = "M6.5 2A2.5 2.5 0 0 0 4 4.5v11.75c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V15h.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 5H15v-.5A2.5 2.5 0 0 0 12.5 2h-6ZM15 6h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H15V6ZM5 4.5C5 3.67 5.67 3 6.5 3h6c.83 0 1.5.67 1.5 1.5V5H5v-.5ZM12.5 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0Zm-3-.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5Zm-2 .5v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0Z";
   
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