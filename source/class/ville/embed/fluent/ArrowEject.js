/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowEject",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.6 5.2a.5.5 0 0 1 .8 0l4.5 6a.5.5 0 0 1-.4.8h-9a.5.5 0 0 1-.4-.8l4.5-6Zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.5 6A1.5 1.5 0 0 0 5.5 13h9a1.5 1.5 0 0 0 1.2-2.4l-4.5-6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z",
    FILLED : "M11.2 4.6c-.6-.8-1.8-.8-2.4 0l-4.5 6A1.5 1.5 0 0 0 5.5 13h9a1.5 1.5 0 0 0 1.2-2.4l-4.5-6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z"
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