/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PortHdmi",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.85 7.44A1.5 1.5 0 0 1 5.91 7h8.18c.4 0 .78.16 1.06.44l2.41 2.41c.28.28.44.67.44 1.06v.59c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.59c0-.4.16-.78.44-1.06l2.41-2.41ZM5.91 8a.5.5 0 0 0-.35.15l-2.41 2.41a.5.5 0 0 0-.15.35v.59c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-.59a.5.5 0 0 0-.15-.35l-2.41-2.41a.5.5 0 0 0-.35-.15H5.9ZM6 10c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10Z",
    FILLED : "M4.85 7.44A1.5 1.5 0 0 1 5.91 7h8.18c.4 0 .78.16 1.06.44l2.41 2.41c.28.28.44.67.44 1.06v.59c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.59c0-.4.16-.78.44-1.06l2.41-2.41ZM6.5 9.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});